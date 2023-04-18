class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  bannerSource() {
    if (this.hasBeenLiked) {
      return "./images/badge-like.png";
    } else {
      return "./images/badge-nope.png";
    }
  }

  getBannerHtml() {
    if (this.hasBeenSwiped) {
      return `
        <div class="banner"><img src="${this.bannerSource()}" /></div>
        `;
    } else {
      return ``;
    }
  }

  getProfileHtml() {
    const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this;
    return `
            <div class="prospect">
                ${this.getBannerHtml()}
                <p class="prospect-info">${name}, ${age}</p>
                <p class="prospect-bio">${bio}</p>
            </div>
            <div class="buttons">
                <div class="button dislike-btn" data-like-or-dislike = 'dislike' ><img src="./images/icon-cross.png" /></div>
                <div class="button like-btn" data-like-or-dislike = 'like' ><img src="./images/icon-heart.png" /></div>
            </div>
        `;
  }
}

export default Dog;
