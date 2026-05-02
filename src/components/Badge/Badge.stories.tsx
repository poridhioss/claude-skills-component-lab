import Badge from './Badge';

export default {
  title: 'Badge',
  render: () => (
    <>
      <Badge label="neutral" />
      <Badge label="ok" tone="success" />
      <Badge label="error" tone="danger" />
    </>
  ),
};
