const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

//selezioniamo l'element della dom in cui inserire le card
containerTeam = document.getElementById('container_team_card');

//creo l'elemento della dom che card le card
let memberCardRow = document.createElement('div');
//aggiungo le classi di boostarp
memberCardRow.classList.add('row', 'row-cols-1', 'row-cols-md-3', 'g-4');
//aggiungo il contenitore delle card alla dom 
containerTeam.appendChild(memberCardRow);


//creo una card per ogni membro
for (let key in team) {
  //stampare su console le informazioni di nome, ruolo e la stringa della foto
  console.log(team[key]);
  let teamMember = team[key];
  console.log(teamMember.name, teamMember.role, teamMember.image);

  //creo l'elmento della dom che conterrà la col per la card 
  let memberCard = document.createElement('div');
  //aggiungo la classe di boostarp col
  memberCard.classList.add('col');

  //aiiungo il contenuto della card
  memberCard.innerHTML = `
    <div class="card">
      <img src="./img/${teamMember.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title text-center">${teamMember.name}</h5>
        <p class="card-text text-center">${teamMember.name}</p>
      </div>
    </div>
  `;

  //aggiungo le card al contenitore delle card
  memberCardRow.appendChild(memberCard);

}