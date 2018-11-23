exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    borderColor: 'purple',
    cursorColor: 'purple',
    css: `
      ${config.css || ''}
      .tabs_nav .tabs_list .tab_text {
        color: purple;
      }
      .tabs_nav .tabs_title {
        color: purple;
      }
    `
  });
}
