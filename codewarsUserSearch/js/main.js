const displayFields = {
  codeWarsLogo: document.querySelector("#codeWarsUserSearchLogo"),
  userCard: document.querySelector(".userCard"),
  userRank: document.querySelector("#userCard--userRank"),
  userName: document.querySelector("#userCard--userName"),
  userLeaderBoardRank: document.querySelector("#userCard--leaderBoardRank"),
  userClan: document.querySelector("#userCard--UserDescriptors--clan"),
  userProfileLink: document.querySelector(
    "#userCard--UserDescriptors--profileLink"
  ),
  userProgLangListCont: document.querySelector("#usedProgrammingLanguages"),
  userSearchBox: document.querySelector("#userSearchBox"),
  userCompKataTotal: document.querySelector(
    "#ancillaryUserInfo--totalCompletedKatas"
  ),
  userNotFoundField: document.querySelector("#userNotFoundField"),

  async getUserData() {
    const choice = this.userSearchBox.value;
    const userBadgeSrc = `https://www.codewars.com/users/${choice}/badges/large`;
    const url = `https://www.codewars.com/api/v1/users/${choice}`;
    const res = await fetch(url);
    const userObj = await res.json();

    console.log(`im the userObj`, userObj);
    if (!!userObj.reason) {
      this.userNotFound();
      this.updateUserBadgeWithLogo();
      this.hideUserCardVisibility();
      this.clearLanguagesUsedField();
      this.clearCompKataTotal();
      return;
    }
    this.clearLanguagesUsedField();
    this.resetDisplayFields();
    this.showUserCardVisibility();
    this.updateLeaderBoardRankDisplayField(userObj);
    this.updateClanDisplayField(userObj);
    this.updateLogoWithUserBadge(userBadgeSrc);
    this.updateTotalOfCompletedKatas(userObj);
    this.updateProgLangDisplayField(userObj);
    this.updateRankDisplayField(userObj);
    this.updateUserNameDisplayField(userObj);
    this.updateLeaderBoardRankDisplayField(userObj);
    this.updateUserProfileLink(choice);
    //   end of fetch
  },
  userNotFound() {
    this.userNotFoundField.textContent = "User Not Found";
  },
  resetDisplayFields() {
    this.userNotFoundField.textContent = "";
  },
  updateRankDisplayField(userObj) {
    let userRank = Math.abs(userObj.ranks.overall.rank);
    this.userRank.textContent = userRank + "Kyu";
    this.userRank.style.color = userObj.ranks.overall.color;
  },
  updateUserNameDisplayField(userObj) {
    this.userName.textContent = userObj.username;
  },
  updateLeaderBoardRankDisplayField(userObj) {
    this.userLeaderBoardRank.textContent = `Global Rank: ${userObj.leaderboardPosition}`;
  },
  updateClanDisplayField(userObj) {
    this.userClan.textContent = userObj.clan;
  },
  clearCompKataTotal() {
    this.userCompKataTotal.textContent = "";
  },
  updateProgLangDisplayField(userObj) {
    for (let key in userObj.ranks.languages) {
      this.userProgLangListCont.appendChild(
        document.createElement("li")
      ).innerHTML = `&nbsp` + key + "&nbsp";
    }
  },
  clearLanguagesUsedField() {
    this.userProgLangListCont.innerHTML = "";
  },
  updateTotalOfCompletedKatas(userObj) {
    this.userCompKataTotal.textContent = userObj.codeChallenges.totalCompleted;
  },
  updateLogoWithUserBadge(userBadgeSrc) {
    this.codeWarsLogo.src = userBadgeSrc;
  },
  updateUserBadgeWithLogo() {
    this.codeWarsLogo.src = assetSources.logoSrc;
  },
  showUserCardVisibility() {
    this.userCard.style.visibility = `visible`;
  },
  hideUserCardVisibility() {
    this.userCard.style.visibility = `hidden`;
  },
  updateUserProfileLink(userChoice) {
    const userProfileLink = `https://www.codewars.com/users/${userChoice}`;
    this.userProfileLink.innerHTML = `<a href="${userProfileLink}">${userProfileLink}</a>`;
  },
};

const assetSources = {
  logoSrc: `/codewarsUserSearch/assets/codewars-search-logo.png`,
};

displayFields.userSearchBox.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    displayFields.getUserData();
  }
});
