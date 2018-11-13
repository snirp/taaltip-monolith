/** Subtract array from array */
Array.prototype.diff = function(a) {
  return this.filter(function(i) {return a.indexOf(i) < 0;});
};

/** Stringify localstorage values to allow arrays and objects */
Storage.prototype.setObj = function(key, obj) {
  return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
  return JSON.parse(this.getItem(key))
}

/* SJABLOON
  "SLUG": {
    title: ``,
    voorbeeld: [
      ``,
      {
        fout: ``,
        goed: ``
      },
      `.`,
    ],
    hints: [
      `HTML`,
      `HTML`,
    ],
    uitleg: [
      {
        tekst: `HTML`,
        pijlen: [
          {
            links: `HTML`,
            rechts: `HTML`
          },
        ]
      },{
        tekst: `HTML`,
        pijlen: [
          {
            links: `HTML`,
            rechts: `HTML`
          },
        ]
      }
    ],
    referenties: [
      {
        url: ``,
        tekst: ``
      },
    ]
  },
*/

const tips = {
  "ICT-er-of-ICT'er": {
    title: `ICT-er – ICT’er`,
    voorbeeld: [
      `Menig `,
      {
        fout: `ICT-er`,
        goed: `ICT’er`
      },
      ` werkt onder een `,
      {
        fout: `zzp’contract`,
        goed: `zzp-contract`
      },
      `.`
    ],
    hints: [
      `Tussen een afkorting en een achtervoegsel komt altijd een apostrof: ’`,
      `Tussen een afkorting en een bestaand woord komt altijd een streepje: -`,
    ],
    uitleg: [
      {
        tekst: `
        <p>
          <strong>ICT</strong> is een afkorting en <strong>er</strong> is hier geen zelfstandig woord, maar een achtervoegsel.<br>
          Bekende achtervoegsels bij afkortingen zijn: <strong>er</strong>, <strong>tje</strong>, <strong>loos</strong>, 
          <strong>en</strong>.
        <p>
        `,
        pijlen: [
          { rechts: `zzp’er`},
          { rechts: `vwo’ers`},
          { rechts: `tv’tje`},
          { rechts: `pc’loos`},
          { rechts: `sms’en`},
        ]
      },{
        tekst: `
        <p>
          <strong>zzp</strong> is een afkorting en <strong>contract</strong> is een zelfstandig woord.
        </p>
        `,
        pijlen: [
          { rechts: `ICT-afdeling`},
          { rechts: `tv-gids`},
          { rechts: `pc-gebruik`},
          { rechts: `sms-bericht`},
        ]
      }
    ],
    referenties: [
      {
        url: `https://taalhulp123.nl/spellinghulp123`,
        tekst: `Spellinghulp123 Nederlands, kolom 13`
      },
    ]
  },

  "teveel-of-te-veel": {
    title: `teveel / te veel`,
    voorbeeld: [
      {
        fout: `Teveel`,
        goed: `Te veel`
      },
      ` slaap maakt je nog slaperiger.`,
    ],
    hints: [
      `Je schrijft <strong>teveel</strong> alleen aan elkaar als je er <strong>een</strong> voor kunt zetten.`,
    ],
    uitleg: [
      {
        tekst: `
        <p><strong>Te veel</strong> slaap maakt je nog slaperiger. <strong>te veel</strong> zijn hier twee woorden, 
        niet aan elkaar geschreven.</p>
        <ul>
          <li><strong>veel</strong> slaap: <strong>veel</strong> is een bijvoeglijk naamwoord en zegt iets over de slaap.</li>
          <li><strong>te veel</strong> slaap: <strong>te</strong> zegt iets over veel → een te grote dosis slaap.</li>
        </ul>
        `,
      },{
        tekst: `
        <p><strong>Een teveel</strong> aan slaap maakt je nog slaperiger.</p>
        <ul>
          <li><strong>teveel</strong> is hier een zelfstandig naamwoord. Hier komt dus geen spatie tussen te en veel.</li>
        </ul>
        `
      }
    ],
    referenties: [
      {
        url: `https://taalhulp123.nl/stijlhulp123`,
        tekst: `Stijlhulp123 Nederlands, p. 5`
      },
    ]
  },

  "persé-of-per-se": {
    title: `persé – per se`,
    voorbeeld: [
      `Zij wil dit jaar `,
      {
        fout: `persé`,
        goed: `per se`
      },
      ` naar Amerika.`,
    ],
    hints: [
      `<strong>per se</strong> is een Latijnse uitdrukking van twee woorden.`,
      `In het Latijn schrijf je <strong>nooit</strong> een accentteken.`,
    ],
    uitleg: [
      {
        tekst: `<p>De Latijnse uitdrukking blijft ongewijzigd in het Nederlands.</p>`,
        pijlen: [
          {
            links: `per se`,
            rechts: `betekenis: beslist, absoluut`
          },
        ]
      },
    ],
    referenties: [
      {
        url: `https://taalhulp123.nl/spellinghulp123`,
        tekst: `Spellinghulp123 Nederlands, kolom 12 `
      },
    ]
  },

  "gestresst-of-gestrest": {
    title: `gestresst - gestrest`,
    voorbeeld: [
      `Waarom ben je zo `,
      {
        fout: `gestresst`,
        goed: `gestrest`
      },
      `?`,
    ],
    hints: [
      `Engelse leenwerkwoorden gaan als het Nederlandse regelmatige werkwoord.`,
      `<strong>kussen</strong>: ik kus - hij kust → <strong>stressen</strong>: ik stres - hij strest`,
    ],
    uitleg: [
      {
        tekst: `
        <h4>Engelse leenwerkwoorden</h4>
        <p>
          De verleden tijd en het voltooid deelwoord gaan altijd volgens de regel van ’t kofschip.
        <br>
          kuss<del>en</del>: de laatste letter van het hele werkwoord zonder -en is <strong>s</strong>. 
          De s staat in ’t kof<strong>s</strong>chip → stam <strong>+ te</strong>.
        `,
        pijlen: [
          {
          links: `hij kus<strong>te</strong> - hij heeft gekus<strong>t</strong>`,
          rechts: `hij stres<strong>te</strong> - hij is gestre<strong>st</strong>`
          },
        ]
      },{
        tekst: `
          <h4>Engelse leenwoorden</h4>
          <p><strong>de stress</strong>: zelfstandig naamwoorden houden wel de dubbele medeklinker</p>
        `,
        pijlen: [
          {
            links: `de fitne<strong>ss</strong>`,
            rechts: `hij fitnest - hij heeft gefitnest`
          },{
            links: `de to<strong>ss</strong>`,
            rechts: `hij tost - hij heeft getost`
          },{
            links: `de gri<strong>ll</strong>`,
            rechts: `hij grilt - hij heeft gegrild`
          },{
            links: `de ye<strong>ll</strong><strong>`,
            rechts: `hij yelt - hij heeft geyeld`
          },
        ]
      },{
        tekst: `<p>Soms is de dubbele medeklinker nodig voor de juiste uitspraak van het werkwoord.</p>`,
        pijlen: [
          {
            links: `de app`,
            rechts: `hij appt`
          },{
            links: `de baseball`,
            rechts: `hij baseballt`
          },
        ]
      }
    ],
    referenties: [
      {
        url: `https://taalhulp123.nl/werkwoordenhulp123`,
        tekst: `Werkwoordenhulp123 Nederlands, p. 6-7 `
      },
    ]
  },

  "babietje-of-baby'tje": {
    title: `babietje – baby’tje / hobbies – hobby’s`,
    voorbeeld: [
      `Zij heeft sinds het `,
      {
        fout: `babietje`,
        goed: `baby'tje`
      },
      ` geen tijd meer voor `,
      {
        fout: `hobbies`,
        goed: `hobby's`
      },
      `.`
    ],
    hints: [
      `<strong>hobby</strong>, <strong>baby</strong> - woorden die eindigen op <strong>medeklinker + y</strong>`,
      `De regels voor het meervoud gelden ook voor het verkleinwoord.`
    ],
    uitleg: [
      {
        tekst: `
          <h4>Regel: een woord dat eindigt op medeklinker + y</h4>
          <p>Bij meervoud: de <strong>s</strong> komt na de apostrof:'</p>
        `,
        pijlen: [
          {
            links: `hob<strong>by</strong>`,
            rechts: `hobby<strong>'s</strong>`
          },{
            links: `ba<strong>by</strong>`,
            rechts: `baby<strong>'s</strong>`
          }
        ]
      },{
        tekst: `<p>Bij verkleinwoord: <strong>tje</strong> komt na de apostrof:’</p>`,
        pijlen: [
          {
            links: `hob<strong>by</strong>`,
            rechts: `hobby<strong>'tje</strong>`
          },{
            links: `ba<strong>by</strong>`,
            rechts: `baby<strong>'tje</strong>`
          }
        ]
      },{
        tekst: `<p><strong>y</strong> blijft staan</p>`,
        pijlen: [
          {
            links: `loll<strong>y</strong>`,
            rechts: `loll<strong>y</strong>'s`
          },
          {
            links: `loll<strong>y</strong>`,
            rechts: `loll<strong>y</strong>'tje`
          },
        ]
      }
    ],
    referenties: [
      {
        url: `https://taalhulp123.nl/spellinghulp123`,
        tekst: `Spellinghulp123 Nederlands, kolom 1 en 2`
      },
    ],
  },

  "cadeau's-of-cadeaus": {
    title: `cowboy’tje – cowboytje / cadeau’s – cadeaus`,
    voorbeeld: [
      `Het jarige `,
      {
        fout: `cowboy’tje`,
        goed: `cowboytje`
      },
      ` werd overladen met `,
      {
        fout: `cadeau's`,
        goed: `cadeaus`,
      },
      `.`
    ],
    hints: [
      `cowboy, cadeau - woorden die eindigen op een combinatie van klinkers`,
      `De regels voor het meervoud gelden hier ook voor het verkleinwoord.`
    ],
    uitleg: [
      { 
        tekst: `
          <h4>Een woord eindigt op een combinatie van klinkers:</h4>
          <p>bij meervoud: de <strong>s</strong> zit eraan vast:</p>
          `,
        pijlen: [ 
          {
            links: `cadeau`,
            rechts: `cadeau<strong>s</strong>`
          }, {
            links: `cowboy`,
            rechts: `cowboy<strong>s</strong>`
          }, {
            links: `etui`,
            rechts: `etui<strong>s</strong>`
          }
        ]
      },{
        tekst: `<p>bij verkleinwoord: <strong>tje</strong> zit eraan vast:</p>`,
        pijlen: [ 
          {
            links: `cadeau`,
            rechts: `cadeau<strong>tje</strong>`
          }, {
            links: `cowboy`,
            rechts: `cowboy<strong>tje</strong>`
          }, {
            links: `etui`,
            rechts: `etui<strong>tje</strong>`
          }
        ]
      }
    ],
    referenties: [
      {
        url: `https://taalhulp123.nl/spellinghulp123`,
        tekst: `Spellinghulp123 Nederlands, kolom 1 en 2`
      },
    ],
  }
};

Vue.prototype.$tips = tips

Vue.prototype.$visited = [];

let visited = []

// TODO make tips an object with methods
const randomNext = function () {
  const tipsKeys = Object.keys(tips)
  let unvisited = tipsKeys.diff(visited);
  if (unvisited.length == 0) {  // everything has been visited: reset
    unvisited = tipsKeys;
    visited = [];
  }
  return unvisited[Math.floor(Math.random() * unvisited.length)];
};

Vue.prototype.$randomNext = randomNext;


Vue.component('goed-fout', {
  props: ['goedFout'],
  template: `
  <span class="goed-fout">
    <span class="fout">{{ goedFout.fout }}</span><span class="goed">{{ goedFout.goed }}</span>
  </span>
  `
})

Vue.component('voorbeeldzin', {
  props: ['zin'],
  template: `
    <div class="krijt voorbeeldzin">
      <span v-for="section in zin">
        <span v-if="typeof section == 'string'">{{ section }}</span>
        <goed-fout v-else :goedFout="section" :key="Date.now()"/>
      </span>
    </div>
  `
})

Vue.component('hint', {
  props: [`hint`],
  template:`
  <li>
    <span v-html="hint" />
  </li>`
})

Vue.component('social-link', {
  props: ['network'],
  created() {
    this.networks = {
      facebook: {
        url: `https://www.facebook.com/sharer/sharer.php?u=https://taalhulp123.nl/taaltip%23/${this.$route.params.id}`,
        faClass: `fa-facebook`
      },
      twitter: {
        url: `https://twitter.com/share?url=https://taalhulp123.nl/taaltip%23/${this.$route.params.id}&amp;text=Taaltip:%20${encodeURI(this.$tips[this.$route.params.id].title)}&amp;hashtags=taalhulp`,
        faClass: `fa-twitter`
      }
    }
  },
  template: `
  <a :href="this.networks[network].url" target="_blank" class="social-taaltip">
    <i class='fa fa-lg' :class="this.networks[network].faClass" />
  </a>`,
})

Vue.component('bord', {
  props: ['voorbeeld', 'hints'],
  template:`
    <div class="krijtbord">
      <div class="social-icons">
        <social-link network="facebook" />
        <social-link network="twitter" />
      </div>
      <voorbeeldzin :zin="voorbeeld" />
      <ul class="hints">
        <hint v-for="(hint, index) in hints" :key="String(index) + Date.now()" :hint="hint"/>
      </ul>
    </div>
  `
});

Vue.component('pijl', {
  props: ['links', 'rechts'],
  template:`
    <li>
      <span v-html="links"/> → <span v-html="rechts"/>
    </li>
  `
});

Vue.component('uitleg', {
  props: ['uitleg'],
  template: `
    <div>
      <div v-html="uitleg.tekst"></div>
      
        <ul>
          <pijl 
            v-for="(pijl, index) in uitleg.pijlen"
            :links="pijl.links"
            :rechts="pijl.rechts"
            :key="index"
          />
        </ul>

    </div>
  `
});

Vue.component('referentie', {
  props: ['referentie'],
  template: `
    <div>
      <a :href="referentie.url" class="reflink">{{ referentie.tekst }}</a>
    </div>
  `
})

Vue.component('nextLink', {
  props: ['id'],
  template: `
  <router-link :to="id" class="krijtbord krijtlink">
    <div>Volgende:</div>
    <div class="krijt-klein">{{ this.$tips[id].title }}</div>
    <div>&gt;</div>
  </router-link>
  `
})

Vue.component('tipLink', {
  props: ['id'],
  template: `
  <li class="tip-item">
    <router-link :to="id" class="reflink">
      {{ this.$tips[id].title }}
    </router-link>
  </li>
  `
})

const container = {
  props: ['id'],
  template: `
  <div>
    <bord :voorbeeld="this.$tips[id].voorbeeld" :hints="this.$tips[id].hints" />

    <uitleg 
      v-for="(item, index) in this.$tips[id].uitleg" 
      :uitleg="item"
      :key="index" />
    
    <referentie 
      v-for="(item, index) in this.$tips[id].referenties"
      :referentie="item"
      :key="index + '-ref' " />
    
    <nextLink :id="this.$randomNext()" />

    <p>Meer taaltips:</p>
    <ul>
      <tipLink 
        v-for="(item, index) in Object.keys(this.$tips)"
        :id=item
        :key="index + '-link' " />
    </ul>
  </div>
  `,
}

const router = new VueRouter({
  routes: [
    { 
      path: '/:id?', 
      component: container, 
      props: true,
      name: 'tip'
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 205 }
  }
});

router.beforeEach((to, from, next) => {
  const id = to.params.id;
  if (!tips[id]){
    router.push({ name: 'tip', params: { id: randomNext() }}) 
  } else {
    visited.push(id);
    document.title = `taaltip: ${tips[id].title} | taalhulp123.nl`;
    document.getElementById('info-title').textContent = `Taaltip: ${tips[id].title}`;
    next();
  }
})

const app = new Vue({
  router,
}).$mount('#taaltip-app')
