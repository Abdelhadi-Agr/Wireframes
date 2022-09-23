<template>
  <div class="headegg " >
    <input v-if="this.selected_canvas.type=='canvas'" class="title-input" title="Project title"  v-model="this.selected_canvas.name" @input="change_name_of_page(this.selected_canvas,this.pages);" />
    <input v-if="this.selected_canvas.type=='theme'" class="title-input" title="Project title"  v-model="this.selected_canvas.name" @input="change_name_of_page(this.selected_canvas,this.themes);" />

    <div class="spacer"></div>
    <div class="action-bar__wrapper">
        <!-- <button  class="action-btn">
          <svg  class="svg-icon svg-fill" style="width: 24px; height: 24px;">
            <path fill="#2b6a73" stroke="none" pid="0" d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62A7.95 7.95 0 0 1 20.1 16l2.37-.78A10.51 10.51 0 0 0 12.5 8z"></path>
          </svg> 
        </button>
    
        <button  class="action-btn"  >
          <svg  class="svg-icon svg-fill" style="width: 24px; height: 24px;">
            <path fill="rgba(0,0,0,.38)" stroke="none" pid="0" d="M18.4 10.6a10.46 10.46 0 0 0-16.86 4.62L3.9 16a8 8 0 0 1 12.72-3.62L13 16h9V7l-3.6 3.6z"></path>
          </svg>
        </button> -->

        <button  class="action-btn" @click="save_in_db()">
          <svg  class="svg-icon svg-fill" version="1.0" width="20px" height="20px" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#2b6a73" stroke="none">
            <path d="M377 5110 c-177 -30 -337 -194 -367 -376 -13 -80 -13 -4268 0 -4348 30 -187 189 -346 376 -376 80 -13 4268 -13 4348 0 187 30 346 189 376 376 6 36 10 760 10 1882 0 1603 -2 1828 -15 1856 -20 42 -952 972 -988 985 -34 13 -3665 13 -3740 1z m553 -927 c0 -412 4 -733 10 -768 20 -123 112 -260 216 -321 22 -13 67 -33 99 -44 57 -20 83 -20 1185 -20 1248 0 1176 -4 1291 66 93 56 159 138 201 250 22 59 22 65 26 802 l3 742 32 0 c29 0 75 -43 465 -433 l432 -432 -2 -1810 c-3 -1744 -4 -1811 -22 -1845 -26 -49 -64 -88 -111 -113 -34 -18 -62 -22 -187 -25 l-148 -4 0 1121 c0 1238 4 1163 -64 1195 -31 15 -186 16 -1796 16 -1610 0 -1765 -1 -1796 -16 -68 -32 -64 43 -64 -1195 l0 -1121 -147 4 c-118 3 -155 8 -183 22 -49 25 -88 64 -113 111 l-22 40 0 2155 c0 2083 1 2156 19 2190 36 69 92 114 161 131 17 4 139 7 273 8 l242 1 0 -707z m2790 -20 c0 -683 -2 -730 -19 -768 -23 -51 -89 -111 -138 -124 -26 -7 -390 -11 -1128 -11 -1034 0 -1092 1 -1130 19 -50 22 -96 67 -121 118 -18 36 -19 74 -22 752 -1 393 0 721 2 728 4 11 233 13 1281 13 l1275 0 0 -727z m470 -2883 l0 -1050 -1630 0 -1630 0 0 1050 0 1050 1630 0 1630 0 0 -1050z"/>
            <path d="M2832 4621 c-16 -17 -32 -44 -36 -62 -3 -17 -6 -239 -5 -493 0 -497 2 -513 52 -550 27 -20 43 -21 288 -24 291 -3 314 1 343 63 23 48 24 990 1 1035 -31 60 -33 60 -336 60 l-277 0 -30 -29z m428 -551 l0 -350 -115 0 -115 0 0 350 0 350 115 0 115 0 0 -350z"/>
            </g>
          </svg>
        <!-- <svg  class="svg-icon svg-fill" style="width: 24px; height: 24px;">
        <path fill="#2b6a73" stroke="none" pid="0" d="M12 4.5C7 4.5 2.73 7.61 1 12a11.83 11.83 0 0 0 22 0c-1.73-4.39-6-7.5-11-7.5zM12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
         </svg> -->
        </button>

        <div class="separator"></div>
    
        <button  class="action-btn" @click="Clearpage()">
          <svg  class="svg-icon svg-fill" style="width: 24px; height: 24px;">
              <path fill="#2b6a73" stroke="none" pid="0" d="M6 19c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
              </svg>
        </button>

          <button  class="action-btn" @click="thisFileUpload()">
            <svg  class="svg-icon svg-fill" style="width: 24px; height: 24px;">
                <path fill="#2b6a73" stroke="none" pid="0" d="M20 6h-8l-2-2H4a2 2 0 0 0-1.99 2L2 18c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm0 12H4V8h16v10z"></path>
                
            </svg> 
            <input type="file" id="file" ref="doc" @change="readFile()" style="display:none;"/>           
          </button>

          <button  class="action-btn" @click="file();">
            <svg  class="svg-icon svg-fill" style="width: 24px; height: 24px;" >
                <path fill="#2b6a73" stroke="none" pid="0" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path>
                </svg>
          </button>
      </div>
  </div>
  <nav class="navigation">          
      <div class="tab-bar">
          <a title="Pages" class="tab" @click="toggleTab('pages')">
            <svg   style="width: 24px; height: 24px;" >
                <path :fill="showPages ? '#2b6a73' : 'rgba(0,0,0,.38)'" stroke="none" pid="0" d="M6 2a2 2 0 0 0-1.99 2L4 20a2 2 0 0 0 1.99 2H18a2 2 0 0 0 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"></path>
            </svg>
          </a>
          <a title="Elements" class="tab" @click="toggleTab('elements')">
            <svg   style="width: 24px; height: 24px;" >
                <path :fill="showElements ? '#2b6a73' : 'rgba(0,0,0,.38)'" stroke="none" pid="0" d="M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"></path>
            </svg>
          </a>
          <a title="Settings" class="tab" @click="toggleTab('settings')">
            <svg  width="24" height="24">
               <path :fill="showSettings ? '#2b6a73' : 'rgba(0,0,0,.38)'" pid="0" d="M19.43 12.98a7.8 7.8 0 0 0 0-1.96l2.11-1.65a.5.5 0 0 0 .12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1a7.3 7.3 0 0 0-1.69-.98l-.38-2.65A.49.49 0 0 0 14 2h-4a.49.49 0 0 0-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1a.49.49 0 0 0-.61.22l-2 3.46a.5.5 0 0 0 .12.64l2.11 1.65a7.93 7.93 0 0 0 0 1.96l-2.11 1.65a.5.5 0 0 0-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65a7.68 7.68 0 0 0 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46a.5.5 0 0 0-.12-.64l-2.11-1.65zM12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z"/>
            </svg>
          </a>
          <a title="Elements" class="tab" @click="toggleTab('Compenante')">
           <svg   style="width: 24px; height: 24px;" >
                <path :fill="showTheme ? '#2b6a73' : 'rgba(0,0,0,.38)'" stroke="none" pid="3" d="M2 22h20V2H2v20zm18-2h-8V4h8v16z"></path>
            </svg>
          </a>
          <div class="tab-indicator" ></div>
      </div>          
        

      <div class="tab-content">
          <!-- les pages -->
        <div v-show="showPages">
          <div id="pages-menu">
            <div>
                <table width="100%">
                  <div class="page" hieght=90px v-for="(p,i) in pages"  :key="i" :class="{active:activatedPage[i]}" @click="this_page(i)">
                    <tr >
                          <td class="iconpath" width=30px>                               
                            <svg   style="width: 30px; height: 30px;" >
                            <path pid="0" d="M6 2a2 2 0 0 0-1.99 2L4 20a2 2 0 0 0 1.99 2H18a2 2 0 0 0 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"></path>
                            </svg>  
                          </td>
                            <td class="name">{{p.name}}</td>
                      </tr>
                  </div>
                </table>
            </div>
            <button class="new-page-btn" onclick='javascript:document.getElementById("myForm").style.display = "block";'>
                <svg width="24" height="24">
                  <path fill="rgb(255, 255, 255)" pid="0" d="M14 2H6a2 2 0 0 0-1.99 2L4 20a2 2 0 0 0 1.99 2H18a2 2 0 0 0 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"/>
                </svg>
            </button>
            
            <div class="myForm" id='myForm'>
                <button  class="close" onclick='javascript:document.getElementById("myForm").style.display = "none";'><span aria-hidden="true">×</span></button>
                
                  <h5 class="title">Ajouter une Page</h5>
                  <table>
                    <td ><input type="text" class="form-control" placeholder="Enter Nom" v-model="name_of_page"></td>
                      <td ><button class="btn" @click="add_it();">valide</button></td>
                </table>
                                  
            </div>    
              
          </div>
        </div>
        <!-- Menu  -->
        <div v-show="showElements">
              <div   class="menus-wrapper">
                <div   class="menu-toggle">
                    <div  class="menu-toggle__header">
                        <span >Basic</span>   
                    </div>
                    <div  class="menu-toggle__content" style="max-height: 290px;">
                        <div   class="el-menu">
                            <div   title="icon"  class="el-menu__el" :class="{active:activated[9]}" @click="edit(9)">
                                <svg     style="width: 24px; height: 24px;">
                                    <polygon fill="none" stroke="#000" stroke-width="2" points="6 3 18 14 13 15 16 20.5 13 22 10 16 6 19"/>
                                </svg>
                                <span  >Edit</span>
                            </div>
                            <div   title="input"  class="el-menu__el" :class="{active:activated[0]}" @click="input(0)">
                                <svg     style="width: 24px; height: 24px;">
                                    <defs>
                                        <path  d="M20.34 5.07l.28.09.25.11.24.15.21.17.19.19.16.21.13.23.1.25.06.26.02.27v10l-.02.27-.06.26-.1.25-.13.23-.16.21-.19.19-.21.17-.24.15-.25.11-.28.09-.28.05-.3.02H4.21l-.3-.02-.29-.05-.27-.09-.26-.11-.23-.15-.22-.17-.18-.19-.16-.21-.13-.23-.1-.25-.06-.26-.02-.27V7l.02-.27.06-.26.1-.25.13-.23.16-.21.18-.19.22-.17.23-.15.26-.11.27-.09.29-.05.3-.02h15.55l.3.02.28.05zM4.03 17h15.94V7H4.03v10z" id="svgicon-system-elements-input-a"></path>
                                        <path  d="M6 7.97h2.05v8.06H6V7.97z" id="svgicon-system-elements-input-b"></path>
                                    </defs>
                                    <use xlink:href="#svgicon-system-elements-input-a"></use>
                                    <use xlink:href="#svgicon-system-elements-input-a" fill-opacity="0" _stroke="#000" stroke-opacity="0"></use>
                                    <use xlink:href="#svgicon-system-elements-input-b"></use>
                                </svg>
                                <span  >input</span>
                            </div>
                            <div   title="radio"  class="el-menu__el" :class="{active:activated[1]}" @click="radio(1)">
                                <svg     style="width: 24px; height: 24px;">
                                    <path  d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0-5a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"></path>
                                </svg> 
                                <span  >radio</span>
                            </div>
                            <div   title="checkbox"  class="el-menu__el" :class="{active:activated[2]}" @click="checkbox(2)">
                                <svg     style="width: 24px; height: 24px;">
                                <path  d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                                </svg> 
                                <span  >checkbox</span>
                            </div>
                            <div   title="button"  class="el-menu__el" :class="{active:activated[3]}" @click="button(3)">
                                <svg     style="width: 24px; height: 24px;">
                                    <defs>
                                        <path  d="M20.34 5.07l.28.09.25.11.24.15.21.17.19.19.16.21.13.23.1.25.06.26.02.27v10l-.02.27-.06.26-.1.25-.13.23-.16.21-.19.19-.21.17-.24.15-.25.11-.28.09-.28.05-.3.02H4.21l-.3-.02-.29-.05-.27-.09-.26-.11-.23-.15-.22-.17-.18-.19-.16-.21-.13-.23-.1-.25-.06-.26-.02-.27V7l.02-.27.06-.26.1-.25.13-.23.16-.21.18-.19.22-.17.23-.15.26-.11.27-.09.29-.05.3-.02h15.55l.3.02.28.05zM4.03 17h15.94V7H4.03v10z" id="svgicon-system-elements-button-a"></path>
                                        <path  d="M4.97 7.97h14.01v8.06H4.97V7.97z" id="svgicon-system-elements-button-b"></path>
                                    </defs>
                                    <use xlink:href="#svgicon-system-elements-button-a"></use>
                                    <use xlink:href="#svgicon-system-elements-button-a" fill-opacity="0" _stroke="#000" stroke-opacity="0"></use>
                                    <use xlink:href="#svgicon-system-elements-button-b"></use>
                                </svg> 
                                    <span  >button</span>
                            </div>
                            <div   title="text"  class="el-menu__el" :class="{active:activated[4]}" @click="text(4)">
                                <svg     style="width: 24px; height: 24px;">
                                    <path  d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"></path>
                                </svg> 
                                <span  >text</span>
                            </div>
                            <div   title="image"  class="el-menu__el" :class="{active:activated[5]}" @click="image(5)">
                                <svg     style="width: 24px; height: 24px;">
                                    <path  d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path>
                                </svg> 
                                <span  >image</span>
                            </div>
                            <div   title="div"  class="el-menu__el" :class="{active:activated[6]}" @click="div(6)">
                                <svg     style="width: 24px; height: 24px;">
                                    <path  d="M19 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 16H5V5h14v14z"></path>
                                </svg> 
                                <span>div</span>
                            </div>
                            <div v-if="this.selected_canvas.type=='canvas'" title="select"  class="el-menu__el" :class="{active:activated[12]}" @click="import_theme(12)">
                                <svg     style="width: 24px; height: 24px;">
                                    <path  d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 12l-4-4h8l-4 4z"></path>
                                </svg>
                                <span  >import</span>
                            </div>
                            <div v-if="this.selected_canvas.type=='theme'" title="blank"  class="el-menu__el" :class="{active:activated[11]}" @click="blank(11)">
                                <svg     style="width: 24px; height: 24px;">
                                    <path  d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 12l-4-4h8l-4 4z"></path>
                                </svg>
                                <span  >blank</span>
                            </div>
                            <div   title="link"  class="el-menu__el" :class="{active:activated[7]}" @click="link(7)">
                                <svg     style="width: 24px; height: 24px;">
                                    <path  d="M3.9 12A3.1 3.1 0 0 1 7 8.9h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4a3.1 3.1 0 0 1 0 6.2h-4V17h4a5 5 0 0 0 0-10z"></path>
                                </svg> 
                                <span  >link</span>
                            </div>
                            <div   title="tableau"  class="el-menu__el" :class="{active:activated[10]}" @click="tableau(10)" >
                                <svg     style="width: 24px; height: 24px;">
                                    <path  d="M20 2H4a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"></path>
                                    </svg> 
                                <span  >table</span>
                            </div>
                            <div   title="date"  class="el-menu__el" :class="{active:activated[8]}" @click="date(8)">
                                <svg     style="width: 24px; height: 24px;">
                                    <path  d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5a2 2 0 0 0-1.99 2L3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1h-2zm3 18H5V8h14v11z"></path>
                                </svg> 
                                <span  >date</span>
                            </div>
                          
                        </div>
                    </div>
                </div>
              </div>
        </div>
        <!-- les parametre -->
        <div v-show="showSettings">
          <div id="pages-menu">
           <div   class="menu-toggle">
                        <div  class="menu-toggle__header">
                            <span  >Parametere</span>   
                        </div>
                    <div class="parameter" >

                        <!-- input parameter-->
                        <div v-if="parameters[0]">

                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>Width</span></td>
                                <td width="50%" align="center"><input type="number"  v-model="intermidiaire" @click="fixkeyBlistner()" @input="selected_element.LONG=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>
                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>Heigth</span></td>
                                <td width="50%" align="center"><input type="number"  v-model="intermidiaire" @click="fixkeyBlistner()" @input="selected_element.LARG=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>
                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>X</span></td>
                                <td width="50%" align="center"><input type="number"  v-model="intermidiaire" @click="fixkeyBlistner()" @input="selected_element.X=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>
                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>Y</span></td>
                                <td width="50%" align="center"><input type="number"  v-model="intermidiaire" @click="fixkeyBlistner()" @input="selected_element.Y=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>
                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>color borders</span></td>
                                <td width="50%" align="center"><input type="color" v-model="intermidiaire" @input="selected_element.fill_color='';selected_element.BORDER_COLOR=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>

                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>color fill</span></td>
                                <td width="50%" align="center"><input type="color" v-model="intermidiaire" @input="selected_element.FILL_COLOR=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>

                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>border size</span></td>
                                <td width="50%" align="center"><input type="range" min="1" max="5" step="1" v-model="intermidiaire" @input="selected_element.SIZE_BORDER=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>

                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>placeholder</span></td>
                                <td width="50%" align="center"><input type="text" v-model="intermidiaire" @click="fixkeyBlistner()" @input="selected_element.TEXT=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>

                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>placeholder color</span></td>
                                <td width="50%" align="center"><input type="color" v-model="intermidiaire" @input="selected_element.TEXT_COLOR=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>
                        </div>

                        <!-- div parameter-->
                        <div v-if="parameters[1]">
                          <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>Width</span></td>
                                <td width="50%" align="center"><input type="number"  v-model="intermidiaire" @click="fixkeyBlistner()" @input="selected_element.LONG=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>
                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>Heigth</span></td>
                                <td width="50%" align="center"><input type="number"  v-model="intermidiaire" @click="fixkeyBlistner()" @input="selected_element.LARG=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>
                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>X</span></td>
                                <td width="50%" align="center"><input type="number"  v-model="intermidiaire" @click="fixkeyBlistner()" @input="selected_element.X=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>
                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>Y</span></td>
                                <td width="50%" align="center"><input type="number"  v-model="intermidiaire" @click="fixkeyBlistner()" @input="selected_element.Y=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>
                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>color borders</span></td>
                                <td width="50%" align="center"><input type="color" v-model="intermidiaire" @input="selected_element.fill_color='';selected_element.BORDER_COLOR=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>

                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>color fill</span></td>
                                <td width="50%" align="center"><input type="color" v-model="intermidiaire" @input="selected_element.FILL_COLOR=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>

                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>border size</span></td>
                                <td width="50%" align="center"><input type="range" min="1" max="5" step="1" v-model="intermidiaire" @input="selected_element.SIZE_BORDER=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>
                        </div>

                        <!-- div parameter-->
                        <div v-if="parameters[11]">
                          <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>Width</span></td>
                                <td width="50%" align="center"><input type="number"  v-model="intermidiaire" @click="fixkeyBlistner()" @input="selected_element.LONG=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>
                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>Heigth</span></td>
                                <td width="50%" align="center"><input type="number"  v-model="intermidiaire" @click="fixkeyBlistner()" @input="selected_element.LARG=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>
                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>X</span></td>
                                <td width="50%" align="center"><input type="number"  v-model="intermidiaire" @click="fixkeyBlistner()" @input="selected_element.X=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>
                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>Y</span></td>
                                <td width="50%" align="center"><input type="number"  v-model="intermidiaire" @click="fixkeyBlistner()" @input="selected_element.Y=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>
                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>color borders</span></td>
                                <td width="50%" align="center"><input type="color" v-model="intermidiaire" @input="selected_element.fill_color='';selected_element.BORDER_COLOR=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>

                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>color fill</span></td>
                                <td width="50%" align="center"><input type="color" v-model="intermidiaire" @input="selected_element.FILL_COLOR=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>

                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>border size</span></td>
                                <td width="50%" align="center"><input type="range" min="1" max="5" step="1" v-model="intermidiaire" @input="selected_element.SIZE_BORDER=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>
                        </div>
                        
                        <!-- text parameter-->
                        <div v-if="parameters[2]">
                            <br>
                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>text</span></td>
                                <td width="50%" align="center"><input type="text" v-model="intermidiaire" @click="fixkeyBlistner()" @input="selected_element.TEXT=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>

                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>color</span></td>
                                <td width="50%" align="center"><input type="color" v-model="intermidiaire" @input="selected_element.TEXT_COLOR=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>
                        </div>

                        <!-- button parameter-->
                        <div v-if="parameters[3]">
                          <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>Width</span></td>
                                <td width="50%" align="center"><input type="number"  v-model="intermidiaire" @click="fixkeyBlistner()" @input="selected_element.LONG=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>
                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>Heigth</span></td>
                                <td width="50%" align="center"><input type="number"  v-model="intermidiaire" @click="fixkeyBlistner()" @input="selected_element.LARG=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>
                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>X</span></td>
                                <td width="50%" align="center"><input type="number"  v-model="intermidiaire" @click="fixkeyBlistner()" @input="selected_element.X=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>
                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>Y</span></td>
                                <td width="50%" align="center"><input type="number"  v-model="intermidiaire" @click="fixkeyBlistner()" @input="selected_element.Y=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>
                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>color fill</span></td>
                                <td width="50%" align="center"><input type="color" v-model="intermidiaire" @input="selected_element.FILL_COLOR=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>

                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>border size</span></td>
                                <td width="50%" align="center"><input type="range" min="1" max="5" step="1" v-model="intermidiaire" @input="selected_element.SIZE_BORDER=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>

                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>placeholder</span></td>
                                <td width="50%" align="center"><input type="text" v-model="intermidiaire" @click="fixkeyBlistner()" @input="selected_element.TEXT=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>

                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>placeholder color</span></td>
                                <td width="50%" align="center"><input type="color" v-model="intermidiaire" @input="selected_element.TEXT_COLOR=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>
                        </div>
                        
                        <!-- img parameter-->
                        <div v-if="parameters[6]">
                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>Width</span></td>
                                <td width="50%" align="center"><input type="number"  v-model="intermidiaire" @click="fixkeyBlistner()" @input="selected_element.LONG=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>
                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>Heigth</span></td>
                                <td width="50%" align="center"><input type="number"  v-model="intermidiaire" @click="fixkeyBlistner()" @input="selected_element.LARG=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>
                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>X</span></td>
                                <td width="50%" align="center"><input type="number"  v-model="intermidiaire" @click="fixkeyBlistner()" @input="selected_element.X=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>
                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>Y</span></td>
                                <td width="50%" align="center"><input type="number"  v-model="intermidiaire" @click="fixkeyBlistner()" @input="selected_element.Y=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>
                            <div class="same_line">
                            <br>
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>url</span></td>
                                <td width="50%" align="center"><input type="text" v-model="intermidiaire" @click="fixkeyBlistner()" @input="selected_element.URL=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>
                        </div>

                        <!-- Link parameter-->
                        <div v-if="parameters[7]">
                            <br>
                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>Link</span></td>
                                <td width="50%" align="center"><input type="text" v-model="intermidiaire" @click="fixkeyBlistner()" @input="selected_element.TEXT=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>

                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>color</span></td>
                                <td width="50%" align="center"><input type="color" v-model="intermidiaire" @input="selected_element.TEXT_COLOR=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>
                        </div>

                        <!-- date parameter-->
                        <div v-if="parameters[8]">
                            <br>
                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>Date</span></td>
                                <td width="50%" align="center"><input type="Date" v-model="intermidiaire" @click="fixkeyBlistner()" @input="selected_element.TEXT=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>

                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>color</span></td>
                                <td width="50%" align="center"><input type="color" v-model="intermidiaire" @input="selected_element.TEXT_COLOR=intermidiaire;"></td>
                                </tr>
                            </table>
                            </div>
                        </div>

                        <!-- table parameter-->
                        <div v-if="parameters[10]">
                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>ligne</span></td>
                                <td width="50%" align="center"><input type="number" v-model="intermidiaireligne" @click="fixkeyBlistner()" @input="selected_element.LIGNE=intermidiaireligne;"></td>
                                </tr>
                            </table>
                            </div>

                            <div class="same_line">
                            <table width="100%">
                                <tr>
                                <td width="50%"><span>colone</span></td>
                                <td width="50%" align="center"><input type="number" v-model="intermidiairecolone" @click="fixkeyBlistner()" @input="selected_element.COLONE=intermidiairecolone;"></td>
                                </tr>
                            </table>
                            </div>
                        </div>

                        <!-- import theme -->
                        <div v-if="parameters[12]">
                          <table width="100%">
                          <div class="page" hieght=90px v-for="(t,i) in themes"  :key="i" :class="{active:activatedTheme[i]}" @click="import_this_theme(i)">
                          <tr >
                            <td class="iconpath" width=30px>                               
                              <svg   style="width: 30px; height: 30px;" >
                              <path pid="0" d="M6 2a2 2 0 0 0-1.99 2L4 20a2 2 0 0 0 1.99 2H18a2 2 0 0 0 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"></path>
                              </svg>  
                            </td>
                          <td class="name">{{t.name}}</td>
                      </tr>
                  </div>
                </table>
                        </div>
                    </div>
                </div>
          </div>
        </div>
        <!-- les bloc -->
        <div v-show="showTheme">
          <div id="pages-menu">
            <div>
                <table width="100%">
                  <div class="page" hieght=90px v-for="(t,i) in themes"  :key="i" :class="{active:activatedTheme[i]}" @click="this_theme(i)">
                    <tr >
                          <td class="iconpath" width=30px>                               
                            <svg  class="svg-icon svg-fill" style="width: 24px; height: 24px;">
                              <path fill="#2b6a73" stroke="none" pid="0" d="M12 4.5C7 4.5 2.73 7.61 1 12a11.83 11.83 0 0 0 22 0c-1.73-4.39-6-7.5-11-7.5zM12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
                            </svg>
                          </td>
                            <td class="name">{{t.name}}</td>
                      </tr>
                  </div>
                </table>
            </div>
            <button class="new-page-btn" onclick='javascript:document.getElementById("myForm_theme").style.display = "block";'>
                <svg width="24" height="24">
                  <path fill="rgb(255, 255, 255)" pid="0" d="M14 2H6a2 2 0 0 0-1.99 2L4 20a2 2 0 0 0 1.99 2H18a2 2 0 0 0 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"/>
                </svg>
            </button>
            
            <div class="myForm" id='myForm_theme'>
                <button  class="close" onclick='javascript:document.getElementById("myForm_theme").style.display = "none";'><span aria-hidden="true">×</span></button>
                
                  <h5 class="title">Ajouter theme</h5>
                  <table>
                    <td ><input type="text" class="form-control" placeholder="Enter Nom" v-model="name_of_theme"></td>
                      <td ><button class="btn" @click="add_it_theme();">valide</button></td>
                </table>
                 {{id_project}}                 
            </div>
          </div>
        </div>
      </div>
  </nav>
  
</template>

<script>
import {rectangle} from "./element/rectangle.js";
import {canvas} from "./element/canvas.js";
import {radio} from "./element/radio.js";
import {div} from "./element/div.js";
import {image} from "./element/image.js";
import {checkbox} from "./element/checkbox.js";
import {button} from "./element/button.js";
import {text} from "./element/text.js";
import {tableau} from "./element/tableau.js";
import {link} from "./element/link.js";
import {date} from "./element/date.js";
import {theme} from "./element/theme.js";
import {blank} from "./element/blank.js";
import usePages  from "../../../composables/pages";
export default {
name:'Draw',
props:[
  'id_project'
],
data: function() {
  return {
      showElements: true,
      showPages: true,
      showTheme:true,
      showSettings:true,
      canvas_color:'white',
      activated:[false,false,false,false,false,false,false,false,false,false,false,false,false],
      activatedPage:[],
      activatedTheme:[],
      selected_canvas:'',
      selected_element:'',
      hover_element:'',
      parameters:[
        false,  //rectangle 
        false,  //div
        false,  //text
        false,  //button
        false,  //checkbox
        false,  //radio
        false,  //image
        false,  //link
        false,  //date
        true,   //canvas
        false,   //tableau
        false,    //blank
        false     //import_theme
      ],
      indexes:['rectangle','div','text','button','checkbox','radio','image','link','date','canvas','tableau','blank','import_theme'],
      intermidiaire:'',
      intermidiaireligne:3,
      intermidiairecolone:3,
      new_width:'',
      new_height:'',
      new_color:'',
      scrollid:null,
      pages:[],
      name_of_page:'',
      themes:[],
      name_of_theme:'',
      is_modified:false,
      id_page:''
  };
},
mounted: function(){
   this.$nextTick(() => {
      this.showElements=this.showTheme=this.showSettings = false
      this.showPages = true
    });
    this.scrollid=document.getElementById("scrollid");    
    this.selected_canvas=new canvas(this.canvas_color,1080,550);
    this.selected_canvas.name='vide';
    this.selected_canvas.c.addEventListener('mousemove',this.hover,false);
    console.log("the id_project received by draw"+this.id_project);
    axios.post(`/api/get_pages_of_project`, {
        id_project_in:this.id_project,
      })
      .then(response => {
        console.log(response.data.data.length);
        for(let i=0;i<response.data.data.length;i++){
          //console.log(response.data.data[i].name_page);
          //let txt=JSON.parse(response.data.data[i].content);
          //console.log(txt);
          this.read_file_from_db(response.data.data[i].content);
        }
        
      })
      
},
methods:{
  save_in_db(){
    let all_my_datas=[];
    all_my_datas.push(this.selected_canvas.name);
    all_my_datas.push(this.selected_canvas.type);
    for(let i=0;i<this.selected_canvas.events.length;i++){
      all_my_datas.push(this.selected_canvas.events[i].save());
    }
    let my_json_datas=JSON.stringify(all_my_datas,null,2);
    console.log(this.selected_canvas.name+'/'+this.id_project);
     axios.post(`/api/savePage`, {
        id_page:this.id_page,
        name_page:this.selected_canvas.name,
        id_project_in:this.id_project,
        content:my_json_datas
      })
      .then(response => console.log(response.data))
      .catch(e => {
        this.errors.push(e)
      });
      alert('saved successfully');
  },
 
  toggleTab (name) {
    if (name === 'elements') {
      this.showElements = true;
      this.showPages=this.showTheme=this.showSettings=false;         
    }
    if (name === 'pages') {
      this.showPages = true;
      this.showElements=this.showTheme=this.showSettings =false; 
    }
    if (name === 'settings') {
      this.showPages=this.showElements=this.showTheme=false; 
      this.showSettings =true;
    }
    if(name == 'Compenante'){
      this.showPages=this.showElements=this.showSettings =false;
      this.showTheme=true;
    }
  },
  // on the click to choise an element will be selected and move it using keyboard
  // but we also need to update the placeholder using keyboard its a colusion
  //fixkeyBlistner fix the error by removing the keyboard listener.
  fixkeyBlistner(){
      window.removeEventListener('keydown',this.handleKeyDown_edit,false);
  },
  change_name_of_page(value,table){
    if(value.type=="canvas"){
      for(let i=0;i<table.length;i++){
       if(table[i].name==this.name_of_page && this.repetition(value.name,table) && value.name!=''){
         table[i].name=value.name;
         this.name_of_page=value.name;
         }
       }
    }
    else{
      for(let i=0;i<table.length;i++){
       if(table[i].name==this.name_of_theme && this.repetition(value.name,table) && value.name!=''){
         table[i].name=value.name;
         this.name_of_theme=value.name;
         }
       }
      }
    },
  click_to_white(number){
        for(let i=0;i<this.indexes.length;i++){
        this.activated[i]=false;
      }
      this.activated[number]=true;
  },
  
  repetition(name,table){
    let is_it_unique=true;
    for(let i=0;i<table.length;i++){
      if(table[i].name==name){
        is_it_unique=false;
        break;
      }
    }
    return is_it_unique;
  },
  add_it_theme(){
    if(this.name_of_theme!=''){
        if(this.repetition(this.name_of_theme,this.themes)){
          let t=new theme('white');
          t.name=this.name_of_theme;
          this.themes.push(t);
          this.selected_canvas=this.themes[this.themes.length-1].copy();
          document.getElementById("myForm_theme").style.display = "none";

          for(let x=0;x<this.themes.length;x++){
          this.activatedTheme[x]=false;
           }
          this.activatedTheme[this.themes.length-1]=true;

          this.remove_all_event_listeners();
        }
        else{
          alert('this name is already used');
        }
      }
      else{
        alert('please the name must not be empty <3');
      }
  },
  add_it(){
      if(this.name_of_page!=''){
        if(this.repetition(this.name_of_page,this.pages)){
          let c=new canvas('white');
          c.name=this.name_of_page;
          this.pages.push(c);
          this.selected_canvas=this.pages[this.pages.length-1].copy();
          document.getElementById("myForm").style.display = "none";

          for(let x=0;x<this.pages.length;x++){
          this.activatedPage[x]=false;
           }
          this.activatedPage[this.pages.length-1]=true;

          this.remove_all_event_listeners();
        }
        else{
          alert('this name is already used');
        }
      }
      else{
        alert('please the name must not be empty <3');
      }
    },
    this_page(i){
      for(let x=0;x<this.pages.length;x++){
        console.log(this.pages[x].color);
      }

        for(let x=0;x<this.pages.length;x++){
          this.activatedPage[x]=false;
        }
          this.activatedPage[i]=true;
      this.showElements=true;
      this.showPages=false;
      this.selected_canvas=this.pages[i].copy();
      this.remove_all_event_listeners();
       axios.post(`/api/get_id_page`, {
            name_page:this.selected_canvas.name,
            id_project_in:this.id_project,
          })
          .then(response => this.id_page=response.data.data[0]._id,
          console.log(this.id_page)
          )
        .catch(e => {
            this.errors.push(e)
        });
    },
    this_theme(i){
      for(let x=0;x<this.themes.length;x++){
        console.log(this.themes[x].color);
      }

        for(let x=0;x<this.themes.length;x++){
          this.activatedTheme[x]=false;
        }
          this.activatedTheme[i]=true;
      this.showElements=true;
      this.showTheme=false;
      this.selected_canvas=this.themes[i].copy();
      this.remove_all_event_listeners();
    },
    import_this_theme(number){
      for(let i=0;i<this.themes[number].events.length;i++){
        if(this.themes[number].events[i].type=='rectangle'){
            let my_type=new rectangle(this.selected_canvas,0,0,250,30,1,'black','','placeholder','grey');
            my_type.read(this.themes[number].events[i]);
            this.selected_canvas.events.push(my_type);
            }
        else if(this.themes[number].events[i].type=='div'){
          let my_type=new div(this.selected_canvas);
          my_type.read(this.themes[number].events[i]);
          this.selected_canvas.events.push(my_type);
          this.selected_canvas.events[this.selected_canvas.events.length-1].ordered();
        }
        else if(this.themes[number].events[i].type=='button'){
          let my_type=new button(this.selected_canvas);
          my_type.read(this.themes[number].events[i]);
          this.selected_canvas.events.push(my_type);
        }
        else if(this.themes[number].events[i].type=='checkbox'){
          let my_type=new checkbox(this.selected_canvas);
          my_type.read(this.themes[number].events[i]);
          this.selected_canvas.events.push(my_type);
         }
        else if(this.themes[number].events[i].type=='date'){
          let my_type=new date(this.selected_canvas);
          my_type.read(this.themes[number].events[i]);
          this.selected_canvas.events.push(my_type);
        }
        else if(this.themes[number].events[i].type=='image'){
          let my_type=new image(this.selected_canvas);
          my_type.read(this.themes[number].events[i]);
          this.selected_canvas.events.push(my_type);
        }
        else if(this.themes[number].events[i].type=='link'){
          let my_type=new link(this.selected_canvas);
          my_type.read(this.themes[number].events[i]);
          this.selected_canvas.events.push(my_type);
        }
        else if(this.themes[number].events[i].type=='radio'){
          let my_type=new radio(this.selected_canvas);
          my_type.read(this.themes[number].events[i]);
          this.selected_canvas.events.push(my_type);
        }
        else if(this.themes[number].events[i].type=='tableau'){
          let my_type=new tableau(this.selected_canvas);
          my_type.read(this.themes[number].events[i]);
          this.selected_canvas.events.push(my_type);
        }
        else if(this.themes[number].events[i].type=='text'){
          let my_type=new text(this.selected_canvas);
          my_type.read(this.themes[number].events[i]);
          this.selected_canvas.events.push(my_type);
        }
        else if(this.themes[number].events[i].type=="blank"){
          let my_type=new blank(this.selected_canvas);
          my_type.read(this.themes[number].events[i]);
          my_type.is_in_theme=false;
          this.selected_canvas.events.push(my_type);
        }
      }
      this.selected_canvas.ctx.fillStyle='white';
      this.selected_canvas.ctx.fillRect(0,0,this.selected_canvas.c.width,this.selected_canvas.c.height);
      for(let i=0;i<this.selected_canvas.events.length;i++){
        this.selected_canvas.events[i].draw();
      }
      this.selected_canvas.events[0].ordered();
      this.toggleTab('elements');
      this.is_modified=true;
    },
  listeners(name){
    this.selected_canvas.c.removeEventListener('mousedown',this.handle_mouse_down_edit,false);
    this.selected_canvas.c.removeEventListener('mousedown',this.handle_mouse_down_button,false);
    this.selected_canvas.c.removeEventListener('mousedown',this.handle_mouse_down_checkbox,false); 
    this.selected_canvas.c.removeEventListener('mousedown',this.handle_mouse_down_image,false);
    this.selected_canvas.c.removeEventListener('mousedown',this.handle_mouse_down_text,false);
    this.selected_canvas.c.removeEventListener('mousedown',this.handle_mouse_down_div,false);
    this.selected_canvas.c.removeEventListener('mousedown',this.handle_mouse_down_radio,false);
    this.selected_canvas.c.removeEventListener('mousedown',this.handle_mouse_down_input,false);
    this.selected_canvas.c.removeEventListener('mousedown',this.handle_mouse_down_tableau,false);
    this.selected_canvas.c.removeEventListener('mousedown',this.handle_mouse_down_link,false);
    this.selected_canvas.c.removeEventListener('mousedown',this.handle_mouse_down_date,false);
    this.selected_canvas.c.removeEventListener('mousedown',this.handle_mouse_down_blank,false);
    if(name=='input'){
      this.selected_canvas.c.addEventListener('mousedown',this.handle_mouse_down_input,false);
    }
    else if(name=='div'){
      this.selected_canvas.c.addEventListener('mousedown',this.handle_mouse_down_div,false);
    }
    else if(name=='radio'){
      this.selected_canvas.c.addEventListener('mousedown',this.handle_mouse_down_radio,false);
    }
    else if(name=='text'){
      this.selected_canvas.c.addEventListener('mousedown',this.handle_mouse_down_text,false);
    }
    else if(name=='image'){
      this.selected_canvas.c.addEventListener('mousedown',this.handle_mouse_down_image,false);
    }
    else if(name=='checkbox'){
      this.selected_canvas.c.addEventListener('mousedown',this.handle_mouse_down_checkbox,false);
    }
    else if(name=='tableau'){
      this.selected_canvas.c.addEventListener('mousedown',this.handle_mouse_down_tableau,false);
    }
    else if(name=='button'){
      this.selected_canvas.c.addEventListener('mousedown',this.handle_mouse_down_button,false);
    }
    else if(name=='edit'){
      this.selected_canvas.c.addEventListener('mousedown',this.handle_mouse_down_edit,false);
    }
    else if(name=='link'){
      this.selected_canvas.c.addEventListener('mousedown',this.handle_mouse_down_link,false);
    }
    else if(name=='date'){
      this.selected_canvas.c.addEventListener('mousedown',this.handle_mouse_down_date,false);
    }
    else if(name=='blank'){
      this.selected_canvas.c.addEventListener('mousedown',this.handle_mouse_down_blank,false);
    }
    else{
      console.log('all close');
    }
  },

  remove_all_event_listeners(){
    this.listeners('');
    for(let i=0;i<this.activated.length;i++){
      this.activated[i]=false;
    }
    this.selected_element='';
    this.hover_element='';
    this.intermidiaire='';
  },

  import_theme(number){
    this.click_to_white(number);
    this.showSettings=true;
    this.showElements=false;
    for(let i=0;i<this.parameters.length;i++)
    {
      this.parameters[i]=false;
    }
    this.parameters[number]=true;
  },
  input(number){
      this.click_to_white(number);
      this.listeners('input');
  },
  
  handle_mouse_down_input(e){
      e.preventDefault();
      e.stopPropagation();
      let startX = parseInt(e.clientX - this.selected_canvas.offsetX+this.scrollid.scrollLeft);
      let startY = parseInt(e.clientY - this.selected_canvas.offsetY+this.scrollid.scrollTop);  
      if((this.selected_canvas.type=="canvas" && !this.is_modified) ||(this.selected_canvas.type=="theme" && this.is_this_element_not_draw_in_blank(startX,startY))||(this.selected_canvas.type=="canvas" && !this.is_this_element_not_draw_in_blank(startX,startY))){   
      let data=new rectangle(this.selected_canvas,startX,startY,250,30,1,'black','','placeholder','grey');
      data.draw();
      this.selected_canvas.events.push(data);
      this.listeners('edit');
      console.log(this.selected_canvas.events);
      }
  },
  
  radio(number){
      this.click_to_white(number);
      this.listeners('radio');
  },
  is_this_element_not_draw_in_blank(x,y){
    let answer=true;
    for(let i=0;i<this.selected_canvas.events.length;i++){
      if(this.selected_canvas.events[i].type=="blank" && this.selected_canvas.events[i].in_it(x,y)){
        answer=false;
        break;
      }
    }
    return answer;
  },
  handle_mouse_down_radio(e){
      e.preventDefault();
      e.stopPropagation();
      let startX = parseInt(e.clientX - this.selected_canvas.offsetX+this.scrollid.scrollLeft);
      let startY = parseInt(e.clientY - this.selected_canvas.offsetY+this.scrollid.scrollTop);
      
       if((this.selected_canvas.type=="canvas" && !this.is_modified) ||(this.selected_canvas.type=="theme" && this.is_this_element_not_draw_in_blank(startX,startY))||(this.selected_canvas.type=="canvas" && !this.is_this_element_not_draw_in_blank(startX,startY))){
          let data=new radio(this.selected_canvas,startX,startY,10);
          data.draw();
          this.selected_canvas.events.push(data);
          this.listeners('edit');
        }
  },
  tableau(number){
      this.click_to_white(number);
      this.listeners('tableau');
  },
  handle_mouse_down_tableau(e){
      e.preventDefault();
      e.stopPropagation();
      let startX = parseInt(e.clientX - this.selected_canvas.offsetX);
      let startY = parseInt(e.clientY - this.selected_canvas.offsetY);
       if((this.selected_canvas.type=="canvas" && !this.is_modified) ||(this.selected_canvas.type=="theme" && this.is_this_element_not_draw_in_blank(startX,startY))||(this.selected_canvas.type=="canvas" && !this.is_this_element_not_draw_in_blank(startX,startY))){
      let data=new tableau(this.selected_canvas,startX,startY,300,150,1,'black','','','');
      data.draw();
      this.selected_canvas.events.push(data);
      this.listeners('edit');
      }
  },
  blank(number){
  this.click_to_white(number);
  this.listeners('blank');
  },
  handle_mouse_down_blank(e){
      e.preventDefault();
      e.stopPropagation();
      let startX = parseInt(e.clientX - this.selected_canvas.offsetX);
      let startY = parseInt(e.clientY - this.selected_canvas.offsetY);
      if((this.selected_canvas.type=="canvas" && !this.is_modified) ||(this.selected_canvas.type=="theme" && this.is_this_element_not_draw_in_blank(startX,startY))||(this.selected_canvas.type=="canvas" && !this.is_this_element_not_draw_in_blank(startX,startY))){
      let data=new blank(this.selected_canvas,startX,startY,300,150,1,'grey','','','');
      data.draw();
      this.selected_canvas.events.push(data);
      this.listeners('edit');
      }
  },
  div(number){
      this.click_to_white(number);
      this.listeners('div');
  },
  handle_mouse_down_div(e){
      e.preventDefault();
      e.stopPropagation();
      let startX = parseInt(e.clientX - this.selected_canvas.offsetX+this.scrollid.scrollLeft);
      let startY = parseInt(e.clientY - this.selected_canvas.offsetY+this.scrollid.scrollTop);
       if((this.selected_canvas.type=="canvas" && !this.is_modified) ||(this.selected_canvas.type=="theme" && this.is_this_element_not_draw_in_blank(startX,startY))||(this.selected_canvas.type=="canvas" && !this.is_this_element_not_draw_in_blank(startX,startY))){
      let data=new div(this.selected_canvas,startX,startY,300,150,1,'black','','','');
      data.draw();
      this.selected_canvas.events.push(data);
      for(let i in this.selected_canvas.events){
          if(this.selected_canvas.events[i].type!='div' && this.selected_canvas.events[i].type!='blank'){
          let c=this.selected_canvas.events[this.selected_canvas.events.length-1];
          this.selected_canvas.events[this.selected_canvas.events.length-1]=this.selected_canvas.events[i];
          this.selected_canvas.events[i]=c;
          break;
          }
      }
      this.listeners('edit');
      console.log(this.selected_canvas.events);
      }
  },

  text(number){
      this.click_to_white(number);
      this.listeners('text');
  },

  handle_mouse_down_text(e){
      e.preventDefault();
      e.stopPropagation();
      let startX = parseInt(e.clientX - this.selected_canvas.offsetX+this.scrollid.scrollLeft);
      let startY = parseInt(e.clientY - this.selected_canvas.offsetY+this.scrollid.scrollTop);
       if((this.selected_canvas.type=="canvas" && !this.is_modified) ||(this.selected_canvas.type=="theme" && this.is_this_element_not_draw_in_blank(startX,startY))||(this.selected_canvas.type=="canvas" && !this.is_this_element_not_draw_in_blank(startX,startY))){
      let data=new text(this.selected_canvas,startX,startY,50,40,1,'','','text','black');
      data.draw();
      this.selected_canvas.events.push(data);
      this.listeners('edit');
      }
  },
  link (number){
      this.click_to_white(number);
      this.listeners('link');
  },

  handle_mouse_down_link(e){
      e.preventDefault();
      e.stopPropagation();
      let startX = parseInt(e.clientX - this.selected_canvas.offsetX+this.scrollid.scrollLeft);
      let startY = parseInt(e.clientY - this.selected_canvas.offsetY+this.scrollid.scrollTop);
      if((this.selected_canvas.type=="canvas" && !this.is_modified) ||(this.selected_canvas.type=="theme" && this.is_this_element_not_draw_in_blank(startX,startY))||(this.selected_canvas.type=="canvas" && !this.is_this_element_not_draw_in_blank(startX,startY))){
      let data=new link(this.selected_canvas,startX,startY,70,40);
      data.draw();
      this.selected_canvas.events.push(data);
      this.listeners('edit');
      }
  },

  image(number){
      this.click_to_white(number);
      this.listeners('image');
  },

  handle_mouse_down_image(e){
      e.preventDefault();
      e.stopPropagation();
      let startX = parseInt(e.clientX - this.selected_canvas.offsetX+this.scrollid.scrollLeft);
      let startY = parseInt(e.clientY - this.selected_canvas.offsetY+this.scrollid.scrollTop);
       if((this.selected_canvas.type=="canvas" && !this.is_modified) ||(this.selected_canvas.type=="theme" && this.is_this_element_not_draw_in_blank(startX,startY))||(this.selected_canvas.type=="canvas" && !this.is_this_element_not_draw_in_blank(startX,startY))){
      let data=new image(this.selected_canvas,startX,startY,100,100);
      data.draw();
      this.selected_canvas.events.push(data);
      this.listeners('edit');
      }
  },

  checkbox(number){
      this.click_to_white(number);
      this.listeners('checkbox');
  },

  handle_mouse_down_checkbox(e){
      e.preventDefault();
      e.stopPropagation();
      let startX = parseInt(e.clientX - this.selected_canvas.offsetX+this.scrollid.scrollLeft);
      let startY = parseInt(e.clientY - this.selected_canvas.offsetY+this.scrollid.scrollTop);
      if((this.selected_canvas.type=="canvas" && !this.is_modified) ||(this.selected_canvas.type=="theme" && this.is_this_element_not_draw_in_blank(startX,startY))||(this.selected_canvas.type=="canvas" && !this.is_this_element_not_draw_in_blank(startX,startY))){
      if(startX>0 && startY>0){
      let data=new checkbox(this.selected_canvas,startX,startY,15,15);
      data.draw();
      this.selected_canvas.events.push(data);}
      this.listeners('edit');
      }
  },

  button(number){
      this.click_to_white(number);
      this.listeners('button');
  },

  handle_mouse_down_button(e){
      e.preventDefault();
      e.stopPropagation();
      let startX = parseInt(e.clientX - this.selected_canvas.offsetX+this.scrollid.scrollLeft);
      let startY = parseInt(e.clientY - this.selected_canvas.offsetY+this.scrollid.scrollTop);
      if((this.selected_canvas.type=="canvas" && !this.is_modified) ||(this.selected_canvas.type=="theme" && this.is_this_element_not_draw_in_blank(startX,startY))||(this.selected_canvas.type=="canvas" && !this.is_this_element_not_draw_in_blank(startX,startY))){
      if(startX>0 && startY>0){
      let data=new button(this.selected_canvas,startX,startY,250,30,1,'','grey','button','black');
      data.draw();
      this.selected_canvas.events.push(data);}
      this.listeners('edit');
      }
  },
  date(number){
      this.click_to_white(number);
      this.listeners('date');
  },
  
  handle_mouse_down_date(e){
      e.preventDefault();
      e.stopPropagation();
      let startX = parseInt(e.clientX - this.selected_canvas.offsetX+this.scrollid.scrollLeft);
      let startY = parseInt(e.clientY - this.selected_canvas.offsetY+this.scrollid.scrollTop);
      if(this.selected_canvas.type=="canvas" ||(this.selected_canvas.type=="theme" && this.is_this_element_not_draw_in_blank(startX,startY))){
      var today = new Date();
      var ladate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      let data=new date(this.selected_canvas,startX,startY,100,30,1,'','',ladate,'black');
      data.draw();
      this.selected_canvas.events.push(data);
      this.listeners('edit');
      }
  },

  edit(number){
      this.click_to_white(number);
      this.listeners('edit');
  },

  handle_mouse_down_edit(e){
      e.preventDefault();
      e.stopPropagation();
      let startX = parseInt(e.clientX - this.selected_canvas.offsetX+this.scrollid.scrollLeft);
      let startY = parseInt(e.clientY - this.selected_canvas.offsetY+this.scrollid.scrollTop);
      if(this.selected_element !=''){
              this.toggleTab('settings');
              this.selected_element.decapsule(this.canvas_color);
              this.selected_element='';

      }
      
      for(let event in this.selected_canvas.events){
          if(this.selected_canvas.events[event].in_it(startX,startY)){
          this.selected_element=this.selected_canvas.events[event];
          }
      }
      if(this.selected_element!=''){
          this.selected_element.encapsule();
          let type=this.selected_element.type;
          let index=this.indexes.indexOf(type);
          if(type!='radio' && type!='checkbox'){
          this.showSettings=true;
          this.showElements=false;
          for(let i=0;i<this.parameters.length;i++){
          this.parameters[i]=false;
          }
          this.parameters[index]=true;
          }
          window.addEventListener('keydown',this.handleKeyDown_edit,false);
          }
      for(let i=0;i<this.activated.length;i++)
          {
            this.activated[i]=false;
          }
          this.activated[9]=true;
  },
  handleKeyDown_edit(e){
      console.log(e.key);
      console.log(this.canvas_color);
      if(e.key=='ArrowRight'){
      this.selected_element.X=this.selected_element.x+5;
      }
      else if(e.key=='ArrowLeft'){
      this.selected_element.X=this.selected_element.x-5;
      }
      else if(e.key=='ArrowUp'){
      this.selected_element.Y=this.selected_element.y-5;
      }
      else if(e.key=='ArrowDown'){
      this.selected_element.Y=this.selected_element.y+5;
      }

      else if(e.key=='q'){
          if(this.selected_element.type!='radio'){
              this.selected_element.LONG=this.selected_element.l-5;
          }
          else{
              this.selected_element.R=this.selected_element.r-5;
          }
      }

      else if(e.key=='d'){
          if(this.selected_element.type!='radio'){
              this.selected_element.LONG=this.selected_element.l+5;
          }
          else{
              this.selected_element.R=this.selected_element.r+5;
          }
      }

      else if(e.key=='s'){
          if(this.selected_element.type!='radio'){
              if(this.selected_element.type=='text'){
              this.selected_element.SIZE=this.selected_element.size-10;
              }
              else{
              this.selected_element.LARG=this.selected_element.L-5;
              }
          }
          else{
              this.selected_element.R=this.selected_element.r-5;
          }  
      }
      else if(e.key=='z'){
          if(this.selected_element.type!='radio')
          {
              if(this.selected_element.type=='text')
              {
              this.selected_element.SIZE=this.selected_element.size+10;
              }
              else
              {
              this.selected_element.LARG=this.selected_element.L+5;
              }
          }
          else {
              this.selected_element.R=this.selected_element.r+5;
          }
      }

      else if(e.key=='Enter'){
          if(this.selected_element.type=='radio'){
              this.selected_element.CLICKED=!this.selected_element.clicked;
          }
          else if(this.selected_element.type=='checkbox'){
              this.selected_element.CHECKED=!this.selected_element.checked;
              console.log('here');
          }
      }

      else if(e.key=='Delete'){
          this.selected_element.delete();
      }
  },

  hover(e){
    e.preventDefault();
    e.stopPropagation();
    let startX = parseInt(e.clientX - this.selected_canvas.offsetX+this.scrollid.scrollLeft);
    let startY = parseInt(e.clientY - this.selected_canvas.offsetY+this.scrollid.scrollTop);
    if(this.hover_element!=''){
        this.hover_element.dishover();
    }
    for(let i=0;i<this.selected_canvas.events.length;i++){
      if(this.selected_canvas.events[i].type=='button'){
        if(this.selected_canvas.events[i].in_it(startX,startY)){
          this.hover_element=this.selected_canvas.events[i];
          this.hover_element.hover();
        }
      }
    }
  },
  thisFileUpload() {
            document.getElementById("file").click();
        },
  file(){
    let all_my_datas=[];
    all_my_datas.push(this.selected_canvas.name);
    all_my_datas.push(this.selected_canvas.type);
    for(let i=0;i<this.selected_canvas.events.length;i++){
      all_my_datas.push(this.selected_canvas.events[i].save());
    }
    let my_json_datas=JSON.stringify(all_my_datas,null,2);
    var FileSaver = require('file-saver');
    var blob = new Blob([my_json_datas], {type: "text/plain;charset=utf-8"});
    let the_file_name=this.selected_canvas.name+'.json';
    FileSaver.saveAs(blob,the_file_name);
    
  },
  filter_datas_of_json(file){
    let name_of_page_json=file[0];
    let name_of_theme_json=file[0];
    this.name_of_page=name_of_page_json;
    this.name_of_theme=name_of_theme_json;
    if(file[1]=='canvas'){ this.add_it();}
    if(file[1]=='theme'){ this.add_it_theme();}
    for(let i=2;i<file.length;i++){
      if(file[i].type=='rectangle'){
        let my_type=new rectangle(this.selected_canvas,0,0,250,30,1,'black','','placeholder','grey');
        my_type.read(file[i]);
        this.selected_canvas.events.push(my_type);
      }
      else if(file[i].type=='div'){
        let my_type=new div(this.selected_canvas);
        my_type.read(file[i]);
        this.selected_canvas.events.push(my_type);
      }
      else if(file[i].type=='blank'){
        let my_type=new blank(this.selected_canvas);
        my_type.read(file[i]);
        this.selected_canvas.events.unshift(my_type);
        console.log(this.selected_canvas.events)
      }
      else if(file[i].type=='button'){
        let my_type=new button(this.selected_canvas);
        my_type.read(file[i]);
        this.selected_canvas.events.push(my_type);
      }
       else if(file[i].type=='checkbox'){
         let my_type=new checkbox(this.selected_canvas);
        my_type.read(file[i]);
        this.selected_canvas.events.push(my_type);
      }
       else if(file[i].type=='date'){
         let my_type=new date(this.selected_canvas);
        my_type.read(file[i]);
        this.selected_canvas.events.push(my_type);
      }
       else if(file[i].type=='image'){
         let my_type=new image(this.selected_canvas);
        my_type.read(file[i]);
        this.selected_canvas.events.push(my_type);
      }
       else if(file[i].type=='link'){
         let my_type=new link(this.selected_canvas);
        my_type.read(file[i]);
        this.selected_canvas.events.push(my_type);
      }
       else if(file[i].type=='radio'){
         let my_type=new radio(this.selected_canvas);
        my_type.read(file[i]);
        this.selected_canvas.events.push(my_type);
      }
       else if(file[i].type=='tableau'){
         let my_type=new tableau(this.selected_canvas);
        my_type.read(file[i]);
        this.selected_canvas.events.push(my_type);
      }
      else if(file[i].type=='text'){
        let my_type=new text(this.selected_canvas);
        my_type.read(file[i]);
        this.selected_canvas.events.push(my_type);
      }
    }
    console.log(this.selected_canvas.events);
  },

  read_file_from_db(content){
    let js_file=JSON.parse(content);
    this.filter_datas_of_json(js_file);
  },
  readFile() {
    this.showPages=true;
    this.showElements=false; 
    this.file = this.$refs.doc.files[0];
    let js_file;
    const reader = new FileReader();
    if (this.file.name.includes(".json")) 
    {
      reader.onload = (res) => {
        js_file=JSON.parse(res.target.result);
        this.filter_datas_of_json(js_file);
      };
      reader.onerror = (err) => console.log(err);
      reader.readAsText(this.file); 
    } 
    else {
      alert('please select json file');
    }
  },
  Clearpage(){
    if(this.selected_canvas.type=="canvas"){
      if(this.selected_canvas.name==''){
       this.selected_canvas.events=[];
       this.selected_canvas.ctx.fillStyle='white';
       this.selected_canvas.ctx.fillRect(0,0,this.selected_canvas.c.width,this.selected_canvas.c.height);
      }
      else{
        for(let i=0;i<this.pages.length;i++){
          if(this.selected_canvas.name==this.pages[i].name){
            this.pages.splice(i,1);
            axios.post(`/api/delete_page`, {
            name_page:this.selected_canvas.name,
            id_project_in:this.id_project,
          })
          .then(response => console.log(response))
        .catch(e => {
            this.errors.push(e)
        });

          }
        }
        this.selected_canvas=new canvas(this.canvas_color,970,500);
        this.selected_canvas.name='vide';
        this.selected_canvas.c.addEventListener('mousemove',this.hover,false);
      }
    }
    else{
      if(this.selected_canvas.name=='')
      {
       this.selected_canvas.events=[];
       this.selected_canvas.ctx.fillStyle='white';
       this.selected_canvas.ctx.fillRect(0,0,this.selected_canvas.c.width,this.selected_canvas.c.height);
      }
      else{
        for(let i=0;i<this.themes.length;i++){
          if(this.selected_canvas.name==this.themes[i].name){
            this.themes.splice(i,1);
             axios.post(`/api/delete_page`, {
            name_page:this.name_of_theme,
            id_project_in:this.id_project,
          })
          .then(response => console.log(response))
        .catch(e => {
            this.errors.push(e)
        });
          }
        }
       this.selected_canvas=new theme(this.canvas_color,970,500);
       this.selected_canvas.name='vide';
       this.selected_canvas.c.addEventListener('mousemove',this.hover,false);
      }
    }
  },
}
}
</script>

<style scoped>
  .navigation {
    top: 65px;
    left: 0;
    z-index: 1005;
    width: 245px;
    height: 90%;
    max-height: 100%;
    background: #fafafa;
    display: flex;
    flex-shrink: 0;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: stretch;
    box-sizing: border-box;
    position: absolute;
    overflow: hidden;
    box-sizing: border-box;
    border-right: 1px solid #e0e0e0;
    box-shadow:
      0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 1px 5px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.2);
  } 
  /* DRAWER DOES NOT DISPLAY IN DEVICES SMALLER THAN 1024px 
  @media screen and (max-width: 124px) {
    .navigation {
      display: none;
    }
  }*/
  .tab {
    padding: 0 18px;
    height: 45px;
    cursor: pointer;
  }
  .tab-bar {
    display: inline-flex;
    padding-top: 20px;
    z-index: 1;
    /* border-bottom: 1px solid rgba(0,0,0,0.12); */
    box-shadow:
      0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 1px 5px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.2);
  }
  .tab-indicator {
    top: 63px;
    height: 2px;
    color: blue;
    position: absolute;
    transition: all .2s cubic-bezier(.4,0,.4,1);
  }
  .tab-content {
    margin-top: 1px;
  }
/*Les pages___________________________________________________________________ */
#pages-menu {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 100%;
  width: 100%;
  position: absolute;
  overflow: visible;
  overflow-y: auto;
}
.new-page-btn:hover{
   background: #ec6359;
}
.new-page-btn {
  position: fixed;
  /*right: 972px;*/
  left:95px;
  bottom: 32px;
  width: 54px;
  height: 54px;
  border-radius: 28px;
  background: #ea493f;
  box-shadow: 5px 10px 20px rgba(255, 255, 255, 0.603);
}
/*Menu ________________________________________________________________________ */
.menus-wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: calc(100% - 58px);
  width: 100%;
  position: absolute;
  /*overflow-y: auto;*/
}
.el-menu {
  width: 100%;
  height: 100%;
  display: grid;
  margin: 1px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(1px, 72px);
}
.el-menu__el {
  width: 79px;
  cursor: pointer;
  padding-top: 1em;
  color: rgba(0,0,0,.87);
  text-align: center;
  border-radius: 2px;
  background-color: transparent;
  transition: all 0.20s cubic-bezier(0.4, 0, 0.2, 1);
}
.el-menu__el:hover{
  background-color: rgba(0,0,0,.08);
}
.el-menu__el span {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: small;
  padding: 0 8px;
}
.menu-toggle__header{
    height: 100%;
    background-color: rgba(0,0,0,.08);
}
.active{
   background-color: rgba(0,0,0,.08); 
}
.page{
  width:245px;
  height: 55px;
  vertical-align:middle;
}
.page:hover{
   background-color: rgba(0,0,0,.08);
}
.iconpath{
  margin-top:15px;
  width:50px;
  height: 40px;
  text-align: center;
  display:inline-block;
}
.name{
  width: 150px;
  height: 30px;
  margin-top: 15px;
  text-align: center;
  display:inline-block;
}
.menu-toggle__header{
    height:25px;
    margin-top: 5px;
    margin-left: 3px;
}
/*parametre ________________________________________________________________*/
.parameter .same_line input[type='text']{
  width:100px;
}
.parameter .same_line{
  margin-left:5px;
  color:rgb(0, 0, 0);
  margin-top:15px;
  margin-bottom: 5px;
  font-family: 'Poppins';
}
.close_icon{
  position:fixed;
  margin-left: 220px;
  margin-top:5px;
  width:30px;
  height: 30px;
  color:white;
  cursor:pointer;
}
.parameter{
  
  margin-top:0px;
  height: 250px;
  width:250px;
  transition: 0.8s;
  opacity:0.9;
}
table{
  width:100%;
  height:100%;
  color:rgb(5, 5, 5);
}
td{
  width:33%;
  height:33%;
  cursor:pointer;
}       
/*pop up _________________________________________________________________*/
.myForm{
  display: none;
  width: 240px;
  margin-top: 270px;
  height: 150px;
  position: fixed;
  background-color: white;
  border: 1px solid rgb(43, 42, 42);
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.603);
}
.close{
  background-color: #e9645b;
   appearance: none;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 18px;
  font-weight: 10;
  line-height: 10px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
}
.close:hover{
  background-color: #ea493f;
}
.title{
  text-align: center;
}
.btn{
  appearance: none;
  background-color: #3cf06f;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 14px;
  font-weight: 400;
  line-height: 10px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
}
.btn:hover{
  background-color: #23e02c;
}
.form-control{
  width: 150px;
  height: 20px;
}
/*Header css ________________________________________________________________________ */
.title-input {
  flex-grow: 1;
  border: 0;
  height: 56px;
  background: transparent;
  outline: none;
}
.action-bar__wrapper {
    top:0ch;
    height: 100%;
    display: flex;
    flex-shrink: 0;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-self: stretch;
    align-items: center;
    box-sizing: border-box;
}

.action-btn {
    height: 36px;
    width: 36px;
    min-width: 28px;
    min-height: 28px;
    padding: 1px;
    margin: 0 6px;
    border-radius: 100%;
    font-size:24px;
    background-color: transparent;
    border: 0px none;
    user-select: none;
    outline: none;
}
.action-btn:hover {
    background-color: rgba(43, 106, 115, 0.038);
}
.action-btn:active {
    background-color: rgba(43, 106, 115, 0.38);
}
.action-btn * {
    vertical-align: middle;
}
.separator {
    width: 1px;
    height: 16px;
    margin: 0 6px;
    background-color: rgba(0, 0, 0, 0.12);
}

.syncing {
    animation:spin 1s linear infinite;
}

.headegg {
z-index: 1000;
height: 64px;
width: calc(100% - 247px);
color: rgba(0,0,0,0.66);
padding: 0 25px 0 25px;
margin-left: 247px;
/* margin-top: -5px; */
border: none;
display: flex;
flex-shrink: 0;
flex-direction: row;
flex-wrap: nowrap;
justify-content: flex-start;
align-self: stretch;
align-items: center;
box-sizing: border-box;
box-shadow:
    0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);

transition-duration: .2s;
transition-timing-function: cubic-bezier(.4,0,.2,1);
transition-property: max-height,box-shadow;
}

/* IN DEVICES SMALLER THAN 1024px -> NO DRAWER (so remove margins) */
@media screen and (max-width: 1024px) {
  .headegg {
    margin: 0px;
    width: 100%;
  }
}

.spacer {
  width: 12px;
}
</style>