const items = new Map();

export function addItem(id, name, quantity) {
  if (items.has(id)) {
    throw new Error(`item ${id} already exists`);
  }
  items.set(id, { id, name, quantity });
  return items.get(id);
}

export function removeItem(id, quantity) {
  const item = items.get(id);
  if (!item) return null;
  item.quantity -= quantity;
  return item;
}

export function getItem(id) {
  return items.get(id) ?? null;
}

export function listItems() {
  return Array.from(items.values());
}
