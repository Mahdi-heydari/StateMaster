const createMediaQuery = (start = null, end = null) => {

    let lowerConstraint = null
    let upperConstraint = null

    if (start) lowerConstraint = `(min-width: ${start}px)`
    if (end) upperConstraint = `(max-width: ${end}px)`

    if (lowerConstraint && upperConstraint) return `${lowerConstraint} and ${upperConstraint}`
    if (!lowerConstraint) return `@media ${upperConstraint}`
    if (!upperConstraint) return `@media ${lowerConstraint}`
}

export default createMediaQuery