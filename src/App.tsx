import { components } from './components/registry';

export default function App() {
  return (
    <div
      style={{
        padding: 'var(--space-lg)',
        fontFamily: 'var(--font-body)',
        color: 'var(--color-fg)',
        background: 'var(--color-bg)',
        minHeight: '100vh',
      }}
    >
      <h1>Component Gallery</h1>
      <p style={{ color: 'var(--color-muted)' }}>
        Components registered in <code>src/components/registry.ts</code>.
      </p>
      {components.map(({ name, category, render }) => (
        <section key={name} style={{ marginTop: 'var(--space-lg)' }}>
          <h2>
            {name} <small style={{ color: 'var(--color-muted)' }}>({category})</small>
          </h2>
          <div>{render()}</div>
        </section>
      ))}
    </div>
  );
}
