Package.describe({
  summary: "bootstrap-alert"
});

Package.on_use(function (api, where) {
  api.add_files(['bootstrap-alert.js'], 'client');
});
