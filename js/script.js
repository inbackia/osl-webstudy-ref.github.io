// - html의 dom 앨리먼트를 불러오기
const links = document.querySelectorAll(".link-tree li")

// - random한 position 값을 구하기
const getRandomPosition = (max, min) => {
    return Math.round(Math.random() * (max - min) + min)
}


// - html dom 앨리먼트 스타일에 random position 적용하기
for(let i = 0; i < links.length; i++) {

    // - window의 내부 너비 높이값을 빼서 텍스트가 흘러가지 않도록하기
    const linkWidth = links[i].clientWidth;
    const linkHeight = links[i].clientHeight;

    links[i].style.top = `${getRandomPosition(200 , innerHeight - (linkHeight * 2))}px`
    links[i].style.left = `${getRandomPosition(0 , innerWidth - (linkWidth * 2))  }px`

}


