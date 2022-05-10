<template>
<div id="app">
    <nav class="navbar navbar-expand-lg navbar-light" style="border-bottom:1px solid #ececec;">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" >
                <router-link to="/" ><img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/True_Corporation_%28Thailand%29.svg/480px-True_Corporation_%28Thailand%29.svg.png" alt="" style="margin-left:350px; width:10%;" ></router-link>
            </a>
               <span style="margin-left:-250px;"> <span style="color:#FF0000;">ไทย</span>  |  Eng</span>

        </div>

    </nav>
    <div class="container">
 

                <router-view :key="$route.fullPath" class="d-flex justify-content-center" />

                
    </div>

    
     <footer class="footer" style="heigth:200px;">
  <div class="content">
       <img src="https://vaccine.trueid.net/static/media/banner.af9b098f.jpg" alt="" style="height:50%;" >
  </div>
</footer>
</div>
</template>


