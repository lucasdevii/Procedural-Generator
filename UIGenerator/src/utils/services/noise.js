const noise = (seed,x,y) => {
  const value = Math.sin(
    seed.value * 423341.122 +
    x.value * 981276.34 +
    y.value * 5123 * 2.23
  )
  console.log(value)
  return value
}