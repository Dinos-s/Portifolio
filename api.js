async function Profile() {
    const url = 'https://raw.githubusercontent.com/Dinos-s/Portifolio/master/profile.json';
    const fetchin = await fetch(url)
    return await fetchin.json()
}