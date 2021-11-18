function addComponent() {
  return import('lodash')
    .then(({default: _}) => {
      const Odiv = document.createElement('div')
      Odiv.innerHTML = _.difference([3, 2, 1, 5, 11, 27], [1, 4, 2]);
      return Odiv
    })
}

const script = document.querySelector('script')
addComponent().then((Odiv) => {
  document.body.insertBefore(Odiv, script)
})