import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang:'zh-CN',
  title: "RanXiaoxiao Homey Space",
  description: "总要乱七八糟说点什么",
  titleTemplate:'MHc.',
  head: [
    [
      'link', { rel: 'icon', href: '/wooden_.png' }
    ],
    [
      'link',{ rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo:'/wooden_.png',
    siteTitle: 'RanXiaoxiao Homey Space',
    nav: [
      { text: 'HOME', link: '/' },
      { 
        text: 'DAIRY',
        items:[
          { 
            text: '随笔',
            items:[
             { text: '二十那天', link: '/guide/2021' }
            ]
          },
          { 
            text: '学记',
            items:[
              { text: '北附', link: '/guide/data-structure' },
              { text: '一中', link: '/guide/algorithm' },
              { text: '复旦', link: '/guide/algorithm' }
            ]
          },
          { 
            text: '书录',
            items:[
             { text: '十日终焉', link: '/guide/2021' }
            ]
          }
        ]
      },
      { text: 'PHOTOS', link: '/markdown-examples', }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: {
          svg:'<?xml version="1.0" encoding="UTF-8"?><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="#333"/><path fill-rule="evenodd" clip-rule="evenodd" d="M19.1833 45.4716C18.9898 45.2219 18.9898 42.9973 19.1833 38.798C17.1114 38.8696 15.8024 38.7258 15.2563 38.3667C14.437 37.828 13.6169 36.1667 12.8891 34.9959C12.1614 33.8251 10.5463 33.64 9.89405 33.3783C9.24182 33.1165 9.07809 32.0496 11.6913 32.8565C14.3044 33.6634 14.4319 35.8607 15.2563 36.3745C16.0806 36.8883 18.0515 36.6635 18.9448 36.2519C19.8382 35.8403 19.7724 34.3078 19.9317 33.7007C20.1331 33.134 19.4233 33.0083 19.4077 33.0037C18.5355 33.0037 13.9539 32.0073 12.6955 27.5706C11.437 23.134 13.0581 20.2341 13.9229 18.9875C14.4995 18.1564 14.4485 16.3852 13.7699 13.6737C16.2335 13.3589 18.1347 14.1343 19.4734 16.0001C19.4747 16.0108 21.2285 14.9572 24.0003 14.9572C26.772 14.9572 27.7553 15.8154 28.5142 16.0001C29.2731 16.1848 29.88 12.7341 34.5668 13.6737C33.5883 15.5969 32.7689 18.0001 33.3943 18.9875C34.0198 19.9749 36.4745 23.1147 34.9666 27.5706C33.9614 30.5413 31.9853 32.3523 29.0384 33.0037C28.7005 33.1115 28.5315 33.2855 28.5315 33.5255C28.5315 33.8856 28.9884 33.9249 29.6465 35.6117C30.0853 36.7362 30.117 39.948 29.7416 45.247C28.7906 45.4891 28.0508 45.6516 27.5221 45.7347C26.5847 45.882 25.5669 45.9646 24.5669 45.9965C23.5669 46.0284 23.2196 46.0248 21.837 45.8961C20.9154 45.8103 20.0308 45.6688 19.1833 45.4716Z" fill="#333"/></svg>'
        }, 
        link: 'https://github.com/ranxiaoxiao-mmm'
      },
      { icon: {
          svg:'<svg t="1741875369997" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16984" width="200" height="200"><path d="M511.104 0C242.261333 0 21.802667 207.36 0.938667 470.912l274.432 113.408a144.512 144.512 0 0 1 81.578666-25.173333c2.688 0 5.333333 0.170667 8.021334 0.256l122.069333-176.725334V380.16a193.194667 193.194667 0 0 1 193.024-193.024c106.410667 0 193.024 86.656 193.024 193.152s-86.613333 193.066667-193.024 193.066667h-4.48l-173.909333 124.202666c0 2.218667 0.170667 4.48 0.170666 6.784a144.725333 144.725333 0 0 1-144.64 144.896 145.578667 145.578667 0 0 1-142.122666-116.352L18.602667 651.52C79.445333 866.432 276.736 1024 511.104 1024c282.752 0 511.957333-229.248 511.957333-512S793.813333 0 511.104 0zM321.706667 776.96l-62.848-26.026667c11.178667 23.168 30.464 42.624 56.064 53.333334a108.842667 108.842667 0 0 0 142.378666-141.824 108.672 108.672 0 0 0-138.88-60.288l64.981334 26.88a80.128 80.128 0 0 1-61.653334 147.925333H321.706667z m487.04-396.928a128.810667 128.810667 0 0 0-128.64-128.64 128.64 128.64 0 1 0 128.64 128.64z m-224.981334-0.213333a96.597333 96.597333 0 1 1 193.322667 0 96.725333 96.725333 0 0 1-96.682667 96.64 96.597333 96.597333 0 0 1-96.64-96.64z" p-id="16985" fill="#13227a"></path></svg>'
      },
      link: 'https://steamcommunity.com/profiles/76561199572775826/'
      },
      { icon: {
          svg:'<svg t="1741875196671" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6835" width="200" height="200"><path d="M757.6 716.7h-489C156.2 716.7 65 625.5 65 513.1c0-112.4 91.1-203.6 203.6-203.6h489c112.4 0 203.6 91.1 203.6 203.6 0 112.4-91.2 203.6-203.6 203.6z" fill="#FF2645" p-id="6836"></path><path d="M555 611.3h-60.5c-3.4 0-4.5 0-2.2-3.4 4.5-9 9-20.2 15.7-29.1 1.1-2.2 2.2-3.4 5.6-3.4h29.1c3.4 0 3.4-1.1 3.4-4.5v-103c0-3.4-1.1-4.5-4.5-3.4h-16.8c-3.4 0-4.5-1.1-4.5-3.4v-28c0-3.4 1.1-4.5 4.5-4.5H602c2.2 0 3.4 0 3.4 3.4v29.1c0 2.2-1.1 3.4-3.4 3.4h-16.8c-3.4 0-4.5 1.1-4.5 4.5v103c0 2.2 1.1 3.4 3.4 3.4h29.1c3.4 0 4.5 1.1 4.5 4.5v28c0 3.4-1.1 4.5-4.5 4.5-17.9-1.1-38.1-1.1-58.2-1.1zM345.5 500.4v78.4c0 5.6-1.1 12.3-4.5 17.9-6.7 11.2-16.8 14.6-30.2 13.4s-21.3-7.8-24.6-20.2c-3.4-12.3-3.4-10.1 7.8-12.3 4.5 0 10.1 2.2 14.6-1.1 2.2-2.2 1.1-7.8 1.1-13.4V416.4c0-3.4 1.1-4.5 4.5-4.5h26.9c3.4 0 4.5 1.1 4.5 4.5-0.1 0-0.1 84-0.1 84z" fill="#FFFFFF" p-id="6837"></path><path d="M506.8 531.8c-4.5 7.8-7.8 16.8-12.3 24.6-2.2 5.6-5.6 6.7-10.1 6.7h-26.9c-2.2 0-4.5 0-6.7-1.1-7.8-2.2-10.1-7.8-7.8-16.8 4.5-13.4 12.3-24.6 17.9-38.1 1.1-2.2 2.2-3.4 3.4-6.7h-23.5c-9-2.2-13.4-7.8-9-17.9 3.4-10.1 9-21.3 14.6-30.2 5.6-10.1 10.1-22.4 16.8-33.6 1.1-2.2 2.2-3.4 5.6-3.4h28c3.4 0 3.4 1.1 2.2 3.4-6.7 14.6-14.6 28-21.3 42.6-1.1 1.1-1.1 2.2-2.2 4.5s0 3.4 2.2 4.5 2.2-1.1 3.4-2.2c1.1-2.2 2.2-3.4 5.6-3.4h28c3.4 0 3.4 1.1 2.2 3.4-9 17.9-17.9 37-26.9 54.9-3.4 6.7-2.2 9 5.6 9h11.2v-0.2z m-250.9 62.7c-6.7-13.4-13.4-25.8-20.2-39.2-1.1-1.1-1.1-2.2 0-3.4 4.5-10.1 4.5-21.3 4.5-33.6 1.1-17.9 2.2-34.7 3.4-51.5 0-2.2 1.1-3.4 3.4-3.4h30.2c2.2 0 3.4 0 3.4 3.4-2.2 25.8-3.4 51.5-6.7 78.4-2.2 16.8-7.8 33.6-19 47 2.1 0.1 1 1.2 1 2.3z m133.3-131h14.6c3.4 0 3.4 1.1 4.5 4.5 1.1 23.5 3.4 47 5.6 70.6 0 2.2 0 5.6 1.1 7.8 2.2 4.5 1.1 9-1.1 14.6-4.5 9-9 20.2-14.6 29.1-1.1 3.4-2.2 3.4-4.5 0-7.8-13.4-13.4-25.8-16.8-41.4-3.4-14.6-3.4-29.1-4.5-43.7-1.1-13.4-2.2-24.6-3.4-38.1 0-3.4 0-4.5 4.5-4.5 4.5 2.2 9 1.1 14.6 1.1z m57.1 147.8c-6.7 0-17.9 1.1-25.8-1.1-3.4-1.1-4.5-2.2-2.2-4.5 5.6-10.1 10.1-20.2 15.7-30.2 1.1-1.1 1.1-3.4 3.4-2.2 7.8 3.4 17.9 2.2 26.9 2.2h23.5c2.2 0 3.4 1.1 2.2 3.4-5.6 10.1-10.1 20.2-15.7 31.4-1.1 2.2-2.2 2.2-4.5 2.2-6.7-1.2-13.4-1.2-23.5-1.2z m319.2-147.8c-12.3 0-12.3 0-12.3-12.3 0-3.4 0-7.8 1.1-12.3 2.2-9 10.1-14.6 21.3-13.4 7.8 1.1 15.7 9 15.7 19s-6.7 16.8-16.8 17.9c-3.4 1.1-5.6 1.1-9 1.1z m-71.6 108.6v35.8c0 3.4-1.1 4.5-4.5 4.5h-28c-3.4 0-4.5-1.1-4.5-4.5v-70.6c0-3.4-1.1-4.5-4.5-4.5h-26.9c-3.4 0-4.5 0-4.5-3.4v-29.1c0-3.4 1.1-3.4 4.5-3.4h28c3.4 0 4.5-1.1 3.4-4.5V470c0-3.4-1.1-3.4-4.5-3.4h-16.8c-2.2 0-3.4 0-3.4-3.4v-29.1c0-2.2 1.1-3.4 3.4-3.4h16.8c2.2 0 3.4-1.1 3.4-3.4 0-7.8 0-7.8 9-7.8h23.5c2.2 0 3.4 1.1 3.4 3.4 0 7.8 0 7.8 7.8 7.8 10.1 0 20.2 2.2 28 6.7 12.3 6.7 16.8 19 16.8 31.4v23.5c0 3.4 1.1 4.5 4.5 4.5 13.4 0 23.5 3.4 31.4 14.6 4.5 5.6 6.7 14.6 6.7 21.3v47c0 17.9-10.1 30.2-28 33.6-6.7 1.1-15.7 1.1-22.4-1.1-12.3-3.4-20.2-14.6-21.3-26.9 0-3.4 1.1-2.2 3.4-2.2h29.1c3.4 0 4.5-1.1 4.5-4.5v-30.2c0-7.8-4.5-13.4-13.4-13.4H694c-2.2 0-3.4 1.1-3.4 3.4 3.3 9.1 3.3 20.3 3.3 33.7z m19-93c0-15.7 1.1-15.7-16.8-15.7-2.2 0-3.4 1.1-3.4 3.4v24.6c0 2.2 1.1 3.4 3.4 3.4h13.4c2.2 0 3.4-1.1 3.4-3.4v-12.3z" fill="#FFFFFF" p-id="6838"></path></svg>'
        }, 
      link: 'https://www.xiaohongshu.com/user/profile/6018b0a60000000001004b05'
      },
    ],

    search: {
      provider: 'local',
    },

  },

})
