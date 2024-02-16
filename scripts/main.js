// insert-components.js

// Check if we are in a browser environment
if (typeof window !== 'undefined') {
  // Function to load HTML components into the DOM
  const loadComponents = async () => {
    try {
      const componentPaths = ['../src/components/HelloWorld.html'];

      for (const path of componentPaths) {
        const response = await fetch(path);
        const html = await response.text();
        document.body.innerHTML += html;
      }

      console.log('Components loaded successfully!');
    } catch (error) {
      console.error('Error loading components:', error);
    }
  };

  // Load components when the window has finished loading
  window.addEventListener('load', loadComponents);
}
