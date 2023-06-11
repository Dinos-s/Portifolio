async function Profile() {
    const url = 'http://raw.githubusercontent.com/Dionos-s/Portifolio/master/profile.json';
    const fetchin = await fetch(url)
    return await fetchin.json()
}