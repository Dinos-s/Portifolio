function updateInfoProfile(profile) {
    const photo = document.getElementById('profile.photo');
    photo.src = profile.photo
    photo.alt = profile.name

    const name = document.getElementById('profile.name');
    name.innerHTML = profile.name

    const location = document.getElementById('profile.location');
    location.innerHTML = profile.location

    const job = document.getElementById('profile.job');
    job.innerHTML = profile.job

    const phone = document.getElementById('profile.phone');
    phone.innerHTML = profile.phone
    phone.href = `tel: ${profile.phone}`

    const email = document.getElementById('profile.email');
    email.innerHTML = profile.email
    email.href = `mailto: ${profile.email}`
}

(async () => {
    const profile = await Profile()
    updateInfoProfile(profile)
    console.log(profile);
})()