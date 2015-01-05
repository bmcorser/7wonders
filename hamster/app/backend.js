export const postDefaults = {
  url: 'https://localhost:8080/api/inventory/crud',
  headers: {Authorization: 'Basic Ym1jb3JzZXJAZ21haWwuY29tOmFiYzEyM2Z1'},
};

export const crudDefaults = {
  object: 'dnamolecule',
  read: {
    filter: {},
    expand: [['dnafeatures']],
    __please_dont_mutate_cols__: true,
    page_size: 10,
    page: 1,
  }
};
