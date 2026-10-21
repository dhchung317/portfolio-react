import { fireEvent, render, screen } from '@testing-library/react';
import ImageCollection from './ImageCollection';
beforeAll(() => {
  HTMLDialogElement.prototype.showModal = function () {
    this.setAttribute('open', '');
  };
  HTMLDialogElement.prototype.close = function () {
    this.removeAttribute('open');
  };
});
it('opens images, cycles between them, and closes on Escape', () => {
  render(
    <ImageCollection
      images={[
        { src: '/first.png', alt: 'First sketch' },
        { src: '/second.png', alt: 'Second sketch' },
      ]}
    />,
  );
  fireEvent.click(screen.getByRole('button', { name: 'Enlarge First sketch' }));
  expect(
    screen.getByRole('dialog', { name: 'First sketch' }),
  ).toBeInTheDocument();
  expect(document.body.style.overflow).toBe('hidden');
  fireEvent.click(screen.getByRole('button', { name: 'Next →' }));
  expect(
    screen.getByRole('dialog', { name: 'Second sketch' }),
  ).toBeInTheDocument();
  fireEvent(
    screen.getByRole('dialog'),
    new Event('cancel', { bubbles: true, cancelable: true }),
  );
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(document.body.style.overflow).toBe('');
});

it('hides art preview captions while preserving the accessible image description', () => {
  render(
    <ImageCollection
      images={[{ src: '/art.jpg', alt: 'Moonlit house' }]}
      showPreviewCaption={false}
    />,
  );
  fireEvent.click(
    screen.getByRole('button', { name: 'Enlarge Moonlit house' }),
  );
  expect(
    screen.getByRole('dialog', { name: 'Moonlit house' }),
  ).toBeInTheDocument();
  expect(screen.queryByText('Moonlit house')).not.toBeInTheDocument();
  expect(screen.getAllByRole('img', { name: 'Moonlit house' })).toHaveLength(2);
});
