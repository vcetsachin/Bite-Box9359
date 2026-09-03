const icons = {
  pizza: 'Assets/icons/pizza.svg',
  burger: 'Assets/icons/burger.svg',
  pasta: 'Assets/icons/pasta.svg',
  samosa: 'Assets/icons/samosa.svg'
};

export function getIconPath(name){
  return icons[name] || null;
}

export async function loadIconInline(name){
  const path = getIconPath(name);
  if(!path) return null;
  const res = await fetch(path);
  if(!res.ok) return null;
  return await res.text();
}

export async function setIcon(el, name){
  const svg = await loadIconInline(name);
  if(!svg) return;
  el.innerHTML = svg;
}

export default { getIconPath, loadIconInline, setIcon };
