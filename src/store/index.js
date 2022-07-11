import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      {
      id:0,
      title:'Alpha',
      img:"https://i.postimg.cc/zfQ6VNWY/captain-america.jpg",
      img1:'https://i.postimg.cc/DycN1Lsg/shield1.png',
      img2:'https://i.postimg.cc/W4xYsnL2/shieldcap2.jpg',
      img3:'https://i.postimg.cc/Vk6KMTzf/shield3.png',
      desc:'The most well-known of his shields is a disc-shaped object with a five-pointed star design in its center, within blue, red, and white concentric circles. This shield is composed of a unique combination of Vibranium, steel alloy and a unknown third catalyst, that has never been duplicated, called Proto-Adamantium',
      category:'',
      price:'',
      power:'',
      usedBy:'Steve Rogers/Captain America'
      },
      {
      id:1,
      title:'Bravo',
      img:'https://i.postimg.cc/vm1ptC8L/arrow.jpg',
      img1:'https://i.postimg.cc/nrYzcC6z/arrow1.jpg',
      img2:'https://i.postimg.cc/Jhw9KPsf/arrow2.jpg',
      img3:'https://i.postimg.cc/nrYzcC6z/arrow1.jpg',
      desc:"The Yaka Arrow is a whistle-controlled arrow made from Yaka that uses technology native to the Centaurian people. The Yaka Arrow was Yondu Udonta's favored weapon. Highly skilled in its usage, Udonta always kept one in a holster by his side",
      category:'',
      price:'',
      power:'',
      usedBy:'Yandu'
      },
      {
      id:2,
      title:'Charlie',
      img:'https://i.postimg.cc/Tw1KRVx3/ring.webp',
      img1:'https://i.postimg.cc/qvrXp55B/ring1.jpg',
      img2:'https://i.postimg.cc/ht4zyWYm/ring2.jpg',
      img3:'https://i.postimg.cc/s2k2RtTw/ring3.jpg',
      desc:"Doctor strange possesses a sling ring which is an essential tool with the power to sustain dimensional portals between any two points on the planet. With this ring, doctor strange can instantly travel wherever he is needed",
      price:'',
      category:'',
      power:'',
      usedBy:'Doctor Steven Strange'
      },
      {
      id:3,
      title:"Delta",
      img:"https://i.postimg.cc/Dy2SC3JT/IRON-MAN-HOT-ROD-1.jpg",
      img1:"https://i.postimg.cc/CLQwb3bJ/IRON-MAN-HOT-ROD-2.jpg",
      img2:"https://i.postimg.cc/pTCHr42f/IRON-MAN-HOT-ROD-3.jpg",
      img3:"https://i.postimg.cc/L6np4xGP/IRON-MAN-HOT-ROD-4.jpg",
      desc:"The Hot Rod is a suit built for speed and agility, and featuring the latest thruster design and armor plating with the same protection as War Machine but with 1/3 the weight. Includes an experimental chameleon (cloaking) mode",
      category:"",
      price:"",
      power:"",
      usedBy:"Tony Stark/Iron Man"
      },
      {
      id:4,
      title:"Echo",
      img:"https://i.postimg.cc/rwfZdTWF/MILANO.jpg",
      img1:"https://i.postimg.cc/sxPw3Csz/MILANO1.jpg",
      img2:"https://i.postimg.cc/dQRBkvcP/MILANO2.jpg",
      img3:"https://i.postimg.cc/FRyjLbqg/MILANO3.jpg",
      desc:"The Milano was an M-class spaceship belonging to Peter Quill, which he used during his escapades as the space outlaw Star-Lord. It later became the main spacecraft used by the Guardians of the Galaxy, until it was severely damaged by a quantum asteroid field, and abandoned on Berhert unrepaired",
      category:"",
      price:"",
      power:"",
      usedBy:"Guardians Of the Galaxy/Peter Quil"
      },
      {
      id:5,
      title:"Foxtrot",
      img:"https://i.postimg.cc/BvnPtcgK/capbike.jpg",
      img1:"https://i.postimg.cc/qRpbNFFG/capbike1.jpg",
      img2:"https://i.postimg.cc/P5GMLcp8/capbike2.jpg",
      img3:"https://i.postimg.cc/qBNBbBQy/capbike3.jpg",
      desc:"Steve Rogers used numerous Harley-Davidson as his transport method. During WWII, he used a 1942 Harley-Davidson WLA Liberator Army motorcycle. After awaking in the modern day, he had used a Harley-Davidson V-Rod, a 2012 Harley-Davidson Softail Slim and a Harley-Davidson Street 750",
      category:"",
      price:"",
      power:"",
      usedBy:"Steve Rogers/Captain America"
      },
      {
      id:6,
      title:"Golf",
      img:"https://i.postimg.cc/C1j7SpsN/eye-of-acomoto.jpg",
      img1:"https://i.postimg.cc/pLFngYZQ/eye-of-acomoto1.jpg",
      img2:"https://i.postimg.cc/8kXJcnXB/eye2.jpg",
      img3:"https://i.postimg.cc/N0PFFKpG/eye3.jpg",
      desc:"The Eye of Acomoto is a weapon of wisdom that can radiate a powerful mystical light that allows Strange to see through all disguises and illusions, see past events, and track both ethereal and corporeal beings by their psychic or magical emissions",
      category:"",
      price:"",
      power:"",
      usedBy:"Doctor Steven Strange"
      },
      {
      id:7,
      title:"Hotel",
      img:"https://i.postimg.cc/FzrB6KXc/gauntlet.jpg",
      img1:"https://i.postimg.cc/LXTyjMgs/gauntlet1.png",
      img2:"https://i.postimg.cc/KzMTy7xh/gauntlet3.jpg",
      img3:"https://i.postimg.cc/SQnTJHNm/gauntlet2.jpg",
      desc:"The Infinity Gauntlet is one of the most powerful objects in the Universe. It was designed to hold six of the soul gems, better known as the Infinity Gems. When used in combination their already impressive powers make the wearer able to do anything they want",
      category:"",
      price:"",
      power:"",
      usedBy:"Thanos/Tony Stark/Iron Man"
      },
      {
      id:8,
      title:"India",
      im:"https://i.postimg.cc/yx08LvBW/Fenris-Wolf.webp",
      img1:"https://i.postimg.cc/J738dyZy/wolf.webp",
      img2:"https://i.postimg.cc/Jz0WnPgJ/wolf2.jpg",
      img3:"https://i.postimg.cc/MZYkmCJV/Fenris-Wolf-2.webp",
      desc:"The Fenris Wolf is a creature of the Asgardian dimension who is said to be an offspring of Loki and the giant Angerboda. It is a huge wolf (usual height 15 feet tall) with human-like intelligence, vast strength and the capacity to change its shape to that of a god or to change its size to that of a real wolf",
      category:"",
      price:"",
      power:"",
      usedBy:"Hella"
      },
      {
      id:9,
      title:"Juliett",
      img:"https://i.postimg.cc/ydC7G0NG/rocket.jpg",
      img1:"https://i.postimg.cc/NfjBZsgQ/rocket1.webp",
      img2:"https://i.postimg.cc/Vv5ZBV8P/Rocket2.webp",
      img3:"https://i.postimg.cc/qvHQzRzT/rocket3.jpg",
      desc:"He is an intelligent, anthropomorphic raccoon, who is an expert marksman, weapon specialist and master tactician. His name and aspects of his character are a nod to The Beatles' 1968 song-Rocky Raccoon. Rocket Raccoon appeared as a prominent member in the 2008 relaunch of the superhero team Guardians of the Galaxy",
      category:"",
      price:"",
      power:"",
      usedBy:"Rocket The Raccoon"
      },
      {
      id:10,
      title:"Kilo",
      img:"https://i.postimg.cc/bvDFXbtQ/babygroot.jpg",
      img1:"https://i.postimg.cc/J4Yq10mK/Baby-Groot1.webp",
      img2:"https://i.postimg.cc/Hk7Qdt6s/groot2.webp",
      img3:"https://i.postimg.cc/bJFJZ7JX/groot3.webp",
      desc:"He's cute, but not just aesthetically. Sure, he's small and sports giant, curious eyes, but Groot gets to demonstrate a personality in the sequel that we didn't get to see enough of in the first movie. He gets to be playful, because he doesn't have the same inhibitions that he would as an adult",
      category:"",
      price:"",
      power:"",
      usedBy:"Baby Groot"
      },
      {
      id:11,
      title:"Lima",
      img:"https://i.postimg.cc/kGjRQTy8/morris.jpg",
      img1:"https://i.postimg.cc/WzftFh2w/morris1.webp",
      img2:"https://i.postimg.cc/J0tzLMbD/morris2.jpg",
      img3:"https://i.postimg.cc/8k31v8R4/morris3.jpg",
      desc:"The version of Morris viewers see on screen is a furry, cuddly, round creature with six legs and four wings and no visible eyes whatsoever. “We definitely wanted Morris to not have a face but have wings",
      category:"",
      price:"",
      power:"",
      usedBy:"Morris"
      },
      {
      id:12,
      title:"Mike",
      img:"https://i.postimg.cc/R0z5R4h1/ironspider.jpg",
      img1:"https://i.postimg.cc/m200LBYx/ironspider1.jpg",
      img2:"https://i.postimg.cc/DfNN6nYW/ironspider2.jpg",
      img3:"https://i.postimg.cc/YSyPP7qy/ironspider3.jpg",
      desc:"The Iron Spider Armor possessed three mechanical spider-arms, or waldoes, created from rapidly grown mono-atomic iron alloy crystal. These could be used to see around corners via cameras in the tips and to manipulate objects indirectly",
      category:"",
      price:"",
      power:"",
      usedBy:"Peter Parker/Spiderman"
      },
      {
      id:13,
      title:"November",
      img:"https://i.postimg.cc/ZqykZXds/ant-man.jpg",
      img1:"https://i.postimg.cc/NFg9W30Z/antman.jpg",
      img2:"https://i.postimg.cc/d1HGBNWv/ant-man2.jpg",
      img3:"https://i.postimg.cc/VN73qmcN/ant-man3.webp",
      desc:"The Ant-Man suit is made of woven steel mesh consisting of unstable molecules, allowing it to shrink with the wearer when they are reduced to their ant size",
      category:"",
      price:"",
      power:"",
      usedBy:"Scott Lang/AntMan/Hank Pym"
      },
      {
      id:14,
      title:"Oscar",
      img:"https://i.postimg.cc/jjwVt29r/Panther.jpg",
      img1:"https://i.postimg.cc/bvb6mtWd/panther1.jpg",
      img2:"https://i.postimg.cc/VLpB2Njt/Panther2.jpg",
      img3:"https://i.postimg.cc/CM6jfKr2/Panther3.webp",
      desc:"The Panther Habit is a uniquely crafted vibranium-weave suit used by the Black Panther, the protector of Wakanda",
      category:"",
      price:"",
      power:"",
      usedBy:"T'Challa/Black Panther/King T'Challa"
      },
      {
      id:15,
      title:"Papa",
      img:"https://i.postimg.cc/C53yZgfQ/cap-endgame-uniform-1149039.jpg",
      img1:"https://i.postimg.cc/6qdc0JmS/stealth1.jpg",
      img2:"https://i.postimg.cc/7YnXJ47J/stealth2.jpg",
      img3:"https://i.postimg.cc/VvcB5ZkF/stealth3.jpg",
      desc:"The suit was adapted for the big screen in The Winter Soldier, but not because Steve had dropped the mantle of Captain America. Instead, this suit was designed for Steve's black ops mission with S.H.I.E.L.D.'s special covert S.T.R.I.K.E. team. Because of its tactical nature and darker color scheme, and because it so closely followed the less-than-beloved The Avengers outfit, this stealth suit became an instant fan-favorite",
      category:"",
      price:"",
      power:"",
      usedBy:"Steve Rogers/Captain America"
      }
  ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
