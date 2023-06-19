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

function updateLanguages(profile) {
    const lingua = document.getElementById('profile.lenguages')
    lingua.innerHTML = profile.languages.map(languages => `<li>${languages}</li>`).join('')
}

function updateProjetos(profile) {
    const projetos = document.getElementById('profile.portifolio')
    projetos.innerHTML = profile.portifolio.map((portifolio) => {
       return `<li>
            <h3 ${portifolio.github ? 'class="title github"' : ''}>${portifolio.name}</h3>
            <a href="${portifolio.url}" target="_blank">${portifolio.url}</a>
        </li>`
    }).join('')
}

function updateExperience(profile) {
    const experience = document.getElementById('profile.professionalExperience')
    experience.innerHTML = profile.professionalExperience.map((experience) => {
        return `<li>
            <h3 class="title">${experience.name}</h3>
            <p class="period">${experience.period}</p>
            <p>${experience.description}</p>
        </li>`
    }).join('')
}

function aboutMe(profile) {
    const aboutMe = document.getElementById('profile.aboutMe')
    aboutMe.innerHTML = profile.aboutMe.join('<br>')
}

(async () => {
    const profile = await Profile()
    updateInfoProfile(profile)
    updateSoftSkills(profile)
    updateHardSkills(profile)
    updateLanguages(profile)
    updateProjetos(profile)
    updateExperience(profile)
    aboutMe(profile)
})()