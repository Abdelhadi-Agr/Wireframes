<template>
  <div class="headegg " >
            <input class="title-input" title="Project title" placeholder="Project title"/>
        
            <div class="spacer"></div>
            <div class="action-bar__wrapper">
                <button  class="action-btn"  >
                  <svg  class="svg-icon svg-fill" style="width: 24px; height: 24px;">
                    <path fill="#2b6a73" stroke="none" pid="0" d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62A7.95 7.95 0 0 1 20.1 16l2.37-.78A10.51 10.51 0 0 0 12.5 8z"></path>
                  </svg> 
                </button>
            
                <button  class="action-btn"  >
                  <svg  class="svg-icon svg-fill" style="width: 24px; height: 24px;">
                    <path fill="rgba(0,0,0,.38)" stroke="none" pid="0" d="M18.4 10.6a10.46 10.46 0 0 0-16.86 4.62L3.9 16a8 8 0 0 1 12.72-3.62L13 16h9V7l-3.6 3.6z"></path>
                  </svg>
                </button>

                <button  class="action-btn">
                 <svg  class="svg-icon svg-fill" style="width: 24px; height: 24px;">
                <path fill="#2b6a73" stroke="none" pid="0" d="M12 4.5C7 4.5 2.73 7.61 1 12a11.83 11.83 0 0 0 22 0c-1.73-4.39-6-7.5-11-7.5zM12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
                </svg>
                </button>
     
                <div class="separator"></div>
            
                <button  class="action-btn">
                  <svg  class="svg-icon svg-fill" style="width: 24px; height: 24px;">
                      <path fill="#2b6a73" stroke="none" pid="0" d="M6 19c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                      </svg>
                </button>

                  <button  class="action-btn" >
                    <svg  class="svg-icon svg-fill" style="width: 24px; height: 24px;">
                        <path fill="#2b6a73" stroke="none" pid="0" d="M20 6h-8l-2-2H4a2 2 0 0 0-1.99 2L2 18c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm0 12H4V8h16v10z"></path>
                    </svg>
                  </button>

                  <button  class="action-btn" >
                    <svg  class="svg-icon svg-fill" style="width: 24px; height: 24px;">
                        <path fill="#2b6a73" stroke="none" pid="0" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path>
                        </svg>
                  </button>
              </div>
</div>
</template>

<script>
export default {
name: 'Header'
}
</script>

<style scoped>
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
@keyframes spin { 100% { transform:rotate(360deg); }}

.headegg {
z-index: 1000;
height: 64px;
width: calc(100% - 240px);
color: rgba(0,0,0,0.66);
padding: 0 25px 0 25px;
margin-left: 240px;
margin-top: -5px;
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