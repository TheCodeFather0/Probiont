
let isShow = false;
homeIcon.addEventListener('click', (e) => {
    e.target.classList.add('activeUser');
    userIcon.classList.remove('activeUser');

    userProfil.classList.add('w0');

    setTimeout(() => {
      userProfil.classList.add('dn')
    }, 200);


    setTimeout(() => {
      main.classList.remove('dn')
    }, 200);
    setTimeout(() => {
      main.classList.remove('w0')
    }, 300);
});

userIcon.addEventListener('click',(e) => {
  e.target.classList.add('activeUser');
  homeIcon.classList.remove('activeUser');

  main.classList.add('w0')
  setTimeout(() => {
    main.classList.add('dn')
  }, 100);

  setTimeout(() => {
    userProfil.classList.remove('dn')
  }, 200);

  setTimeout(() => {
    userProfil.classList.remove('w0');
  }, 300);
})