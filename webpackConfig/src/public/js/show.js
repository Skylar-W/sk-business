function strFn() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('this is a test for babel loader')
    }, 3000)
  })
}

async function showStr() {
  let str = await strFn()
  console.log(str);
}

export default showStr