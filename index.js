function socialIconsLinks (options) {
    if (options.length === 0) {
        return ;
    }
    let  footer = document.querySelector('.footer');
    footer.innerHTML= "";
    options.forEach(option=> {
        footer.innerHTML +=`<a href="${option.url}"><i class="fa fa-${option.socialName}"/></i></a>`
    })

}

module.exports.socialIconsLinks = socialIconsLinks;