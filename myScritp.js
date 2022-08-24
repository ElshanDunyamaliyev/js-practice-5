const introRow = document.querySelector('#intro--row')
introData.forEach(value => {
    const div = document.createElement('div')
    const section = document.createElement('section')
    const i = document.createElement('i')
    const header = document.createElement('header')
    const h2 = document.createElement('h2')
    const p =document.createElement('p')
    


    div.classList.add('col-4','col-12-medium')
    section.classList.add(value.sectionName)
    value.icon.forEach(val => i.classList.add(val))
    h2.textContent = value.title
    p.textContent = value.description


    introRow.appendChild(div)
    div.appendChild(section)
    section.appendChild(i)
    section.appendChild(header)
    section.appendChild(p)
    header.appendChild(h2)
})

const portfolioRow = document.querySelector('#portfolio--row')
portfolioData.forEach(value =>{
    const div = document.createElement('div')
    const section = document.createElement('section')
    const a = document.createElement('a')
    const img = document.createElement('img')
    const header = document.createElement('header')
    const h3 = document.createElement('h3')
    const p =document.createElement('p')
    const footer = document.createElement('footer')
    const ul = document.createElement('ul')
    const li = document.createElement('li')

    div.classList.add('col-4','col-6-medium','col-12-small')
    section.classList.add('box')
    a.setAttribute('href','#')
    a.classList.add('image','featured')
    img.setAttribute('src',value.image)
    img.setAttribute('alt','')
    h3.textContent = value.title
    p.textContent = value.description
    ul.classList.add('actions')
    li.innerHTML = '<a href="#" class="button alt">Find out more</a>'
    

    portfolioRow.appendChild(div)
    div.appendChild(section)
    section.appendChild(a)
    a.appendChild(img)
    section.appendChild(header)
    header.appendChild(h3)
    section.appendChild(p)
    section.appendChild(footer)
    footer.appendChild(ul)
    ul.appendChild(li)

})

const blogRow = document.querySelector('#blog--row')

blogData.forEach(value => {
    const div = document.createElement('div')
    const section = document.createElement('section')
    const a = document.createElement('a')
    const img = document.createElement('img')
    const header = document.createElement('header')
    const h3 = document.createElement('h3')
    const p1 =document.createElement('p')
    const p2 =document.createElement('p')
    const footer = document.createElement('footer')
    const ul = document.createElement('ul')
    const li1 = document.createElement('li')
    const li2 = document.createElement('li')


    div.classList.add('col-4','col-12-small')
    section.classList.add('box')
    a.setAttribute('href','#')
    a.classList.add('image','featured')
    img.setAttribute('src',value.image)
    img.setAttribute('alt','')
    h3.textContent = value.title
    p1.textContent = value.date
    p2.textContent = value.text
    ul.classList.add('actions')
    li1.innerHTML = '<a href="#" class="button icon solid fa-file-alt">Continue Reading</a>'    
    li2.innerHTML = `<a href="#" class="button alt icon solid fa-comment">${value.commentCount} comments</a>`    



    blogRow.appendChild(div)
    div.appendChild(section)
    section.appendChild(a)
    a.appendChild(img)
    section.appendChild(header)
    header.appendChild(h3)
    header.appendChild(p1)
    section.appendChild(p2)
    section.appendChild(footer)
    footer.appendChild(ul)
    ul.appendChild(li1)
    ul.appendChild(li2)
})
