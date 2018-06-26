<template>
    <header class="header">
        <div class="container-fluid">
            <div class="row">
                <div class="navbar-header col-lg-4">
                    <img src="../assets/lupLogo.png" alt="logo">
                </div>
                
                <nav class="navbar navbar-expand-lg navbar-dark col-lg-8">
                    <a class="navbar-brand" href="#">Logo</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#/actual">Actualidad<span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#/cities">Ciudades Cerveceras</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#/tasting">Probando algo más</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Recomendaciones
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#/contact">Contacto</a>
                            </li>
                        </ul>
                        
                    </div>
                </nav>
                
                    
            </div>
            
        </div>
    </header>
</template>


<script>
export default {
    name: 'HeaderLayout'
}
</script>
