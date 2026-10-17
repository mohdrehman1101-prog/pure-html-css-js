/* Consistent, locally served outline icons. */
const iconPaths={
 search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
 menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
 close:'<path d="m6 6 12 12M6 18 18 6"/>',
 heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
 dice:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7.5 7.5h.01M16.5 7.5h.01M12 12h.01M7.5 16.5h.01M16.5 16.5h.01" stroke-width="3"/>',
 arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',
 up:'<path d="M12 20V4m-6 6 6-6 6 6"/>',
 utensils:'<path d="M4 3v5a3 3 0 0 0 6 0V3M7 3v19M20 22V3c-4 0-5 8-5 10h5"/>',
 sparkle:'<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z"/>',
 trophy:'<path d="M8 3h8v6a4 4 0 0 1-8 0V3ZM8 5H4v2a4 4 0 0 0 4 4m8-6h4v2a4 4 0 0 1-4 4M12 13v6M8 21h8M10 19h4"/>',
 empty:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3M8 11h6"/>',
 dot:'<circle cx="12" cy="12" r="4" fill="currentColor" stroke="none"/>',
 star:'<path d="m12 3.2 2.7 5.8 6.3.8-4.6 4.3 1.2 6.2L12 17.4l-5.6 3 1.2-6.2L3 9.8l6.3-.8Z"/>',
 instagram:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.3 6.7h.01" stroke-width="2.6"/>'
};
function icon(name){return `<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name]||''}</svg>`}
document.querySelectorAll('[data-icon]').forEach(el=>{el.innerHTML=icon(el.dataset.icon)});