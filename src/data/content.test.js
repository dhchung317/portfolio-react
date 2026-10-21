import { existsSync } from 'node:fs';
import portfolio from './portfolio.json';
import gallery from './gallery.json';
it('ships every referenced content asset locally', () => {
  const paths = [
    ...portfolio.projects.flatMap((project) => [
      project.image,
      ...project.images.map((image) => image.src),
      ...(project.imageGroups || []).flatMap((group) =>
        group.images.map((image) => image.src),
      ),
    ]),
    ...portfolio.contacts.map((contact) => contact.icon),
    ...gallery.map((image) => image.src),
  ];
  for (const path of paths) {
    expect(path).toMatch(/^\/media\//);
    expect(existsSync(`public${path}`), path).toBe(true);
  }
});
it('keeps project IDs unique and published links intentional', () => {
  expect(new Set(portfolio.projects.map((project) => project.id)).size).toBe(
    portfolio.projects.length,
  );
  expect(
    portfolio.projects.find((project) => project.id === 'ar-you-learning')
      .githubLink,
  ).toBeUndefined();
  for (const project of portfolio.projects)
    expect(project.playstoreLink).toBeUndefined();
});
