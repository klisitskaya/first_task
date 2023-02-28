const animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll () {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset - (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active')
            } else {
                if(!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active')
                }                
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll()
    }, 300);
    
}

const profitContentItem = document.querySelectorAll('.profit_content_item');

function showContent() {
    for (item of profitContentItem) {
        item.addEventListener('click', function() {
            if (this.classList.contains('active_')) {
                this.classList.remove('active_');
            } else {
                for(elem of profitContentItem) {
                    elem.classList.remove('active_');
                }
                this.classList.add('active_');
            } 
        })
    }
}
showContent();

const advantages = document.querySelectorAll('.advantage');

function showInfoAdvantage() {
    for (item of advantages) {
        item.addEventListener('click', function() {
            if (this.classList.contains('active_')) {
                this.classList.remove('active_');
            } else {
                for(elem of profitContentItem) {
                    elem.classList.remove('active_');
                }
                this.classList.add('active_');
            } 
        })
    } 
}
console.log(advantages);

// секция advantages

function showFirstItem () {
    document.querySelector('.first_item').classList.add('active')
}
function hideFirstItem () {
    document.querySelector('.first_item').classList.remove('active')
}
function showSecondItem () {
    document.querySelector('.second_item').classList.add('active')
}
function hideSecondItem () {
    document.querySelector('.second_item').classList.remove('active')
}
function showThirdItem () {
    document.querySelector('.third_item').classList.add('active')
}
function hideThirdItem () {
    document.querySelector('.third_item').classList.remove('active')
}
function showFourthItem () {
    document.querySelector('.fourth_item').classList.add('active')
}
function hideFourthItem () {
    document.querySelector('.fourth_item').classList.remove('active')
}
function showFifthItem () {
    document.querySelector('.fifth_item').classList.add('active')
}
function hideFifthItem () {
    document.querySelector('.fifth_item').classList.remove('active')
}
