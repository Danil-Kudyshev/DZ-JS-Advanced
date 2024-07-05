function checkOnAge(birthday) {
    return (new Date() - new Date(birthday)) / (1000 * 60 * 60 * 24 * 365.25) >= 14
}