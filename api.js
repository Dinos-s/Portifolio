async function Profile() {
    const url = 'https://raw.githubusercontent.com/Dinos-s/Portifolio/master/profile.json';
    const response = await fetch(url)
    const profile = await response.json();
    return profile
}