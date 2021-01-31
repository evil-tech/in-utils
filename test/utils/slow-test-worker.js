process.on('message', ({ test }) => {
  const res = eval(test)
  process.send({ result: 'OK' })
});