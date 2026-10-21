import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import Navbar from './components/Navbar';
import Gallery from './pages/Gallery';
import artwork from './data/gallery.json';
import { projects, contacts } from './data/portfolio.json';

function renderRoute(path = '/') {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}
it('renders a positioned home introduction and local navigation', () => {
  renderRoute();
  expect(
    screen.getByRole('heading', { name: 'A few things I’ve made.' }),
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Gallery' })).toHaveAttribute(
    'href',
    '/gallery',
  );
  expect(
    screen.queryByRole('link', { name: 'Skills' }),
  ).not.toBeInTheDocument();
});
it('renders all projects locally with no content requests', () => {
  const fetchSpy = vi.spyOn(globalThis, 'fetch');
  renderRoute('/projects');
  for (const project of projects)
    expect(
      screen.getByRole('heading', { name: project.title }),
    ).toBeInTheDocument();
  expect(fetchSpy).not.toHaveBeenCalled();
  fetchSpy.mockRestore();
});
it('provides expandable project details without obsolete links', () => {
  renderRoute('/projects');
  const card = screen
    .getByRole('heading', { name: 'Honji Pictionary' })
    .closest('details');
  expect(card).not.toHaveAttribute('open');
  fireEvent.click(card.querySelector('summary'));
  expect(card).toHaveAttribute('open');
  expect(screen.getByRole('link', { name: /Play Honji/ })).toHaveAttribute(
    'href',
    'https://honji.xyz/',
  );
  expect(
    screen.getByText(/downloadable lessons, supported/),
  ).toBeInTheDocument();
  expect(document.querySelector('a[href*="play.google.com"]')).toBeNull();
  expect(document.querySelector('a[href*="AR-You-Learning"]')).toBeNull();
});
it('redirects old skills links to the gallery', () => {
  renderRoute('/skills');
  expect(
    screen.getByRole('heading', { name: 'Art gallery' }),
  ).toBeInTheDocument();
  expect(screen.getByRole('img', { name: artwork[0].alt })).toBeInTheDocument();
});
it('can render local artwork from the gallery manifest', () => {
  render(
    <Gallery
      images={[
        {
          src: '/media/art/example.jpg',
          alt: 'Ink sketch',
          title: 'Study 01',
          caption: 'Ink on paper',
        },
      ]}
    />,
  );
  expect(screen.getByRole('img', { name: 'Ink sketch' })).toHaveAttribute(
    'src',
    '/media/art/example.jpg',
  );
  expect(
    screen.getByRole('button', { name: 'Enlarge Ink sketch' }),
  ).toBeInTheDocument();
});
it('renders imported contacts locally', () => {
  renderRoute('/contact');
  for (const contact of contacts)
    expect(
      screen.getByRole('link', { name: new RegExp(contact.name) }),
    ).toHaveAttribute(
      'href',
      contact.name === 'E-Mail' ? `mailto:${contact.link}` : contact.link,
    );
});
it('shows a useful missing-page message', () => {
  renderRoute('/missing');
  expect(
    screen.getByRole('heading', { name: 'Page not found' }),
  ).toBeInTheDocument();
});
it('closes mobile navigation after resize or link selection', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );
  fireEvent.click(screen.getByRole('button', { name: 'Open navigation' }));
  expect(
    screen.getByRole('button', { name: 'Close navigation' }),
  ).toHaveAttribute('aria-expanded', 'true');
  window.innerWidth = 1000;
  fireEvent(window, new Event('resize'));
  expect(
    screen.getByRole('button', { name: 'Open navigation' }),
  ).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(screen.getByRole('button', { name: 'Open navigation' }));
  fireEvent.click(screen.getByRole('link', { name: 'Gallery' }));
  expect(
    screen.getByRole('button', { name: 'Open navigation' }),
  ).toHaveAttribute('aria-expanded', 'false');
});

it('allows only one expanded project and brings each newly opened tile into view', () => {
  renderRoute('/projects');
  const first = screen
    .getByRole('heading', { name: 'Honji Pictionary' })
    .closest('details');
  const last = screen
    .getByRole('heading', { name: 'Stats Don’t Lie' })
    .closest('details');
  const scroll = vi.spyOn(Element.prototype, 'scrollIntoView');
  scroll.mockClear();
  fireEvent.click(last.querySelector('summary'));
  expect(last).toHaveAttribute('open');
  expect(document.querySelectorAll('.project-tile[open]')).toHaveLength(1);
  expect(scroll.mock.instances.at(-1)).toBe(last);
  expect(scroll).toHaveBeenLastCalledWith({
    block: 'start',
    behavior: 'smooth',
  });
  fireEvent.click(first.querySelector('summary'));
  expect(first).toHaveAttribute('open');
  expect(last).not.toHaveAttribute('open');
  expect(document.querySelectorAll('.project-tile[open]')).toHaveLength(1);
  expect(scroll.mock.instances.at(-1)).toBe(first);
  fireEvent.click(first.querySelector('summary'));
  expect(document.querySelectorAll('.project-tile[open]')).toHaveLength(0);
  expect(scroll).toHaveBeenCalledTimes(2);
});
