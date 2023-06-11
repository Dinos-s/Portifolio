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

function updateSoftSkills(profile) {
    const softSkills = document.getElementById('profile.skills.softSkills');
    softSkills.innerHTML = profile.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profile) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML =  profile.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

(async () => {
    const profile = await Profile()
    updateInfoProfile(profile)
    updateSoftSkills(profile)
    updateHardSkills(profile)
    console.log(profile);
})()