var methodNames2 = {
    'base': 'No Depth Smoothing',
    'NoFm1': 'No Frame Matrix',
    'NoFm2': 'No Frame Matrix',
    'NoRI': 'No Re-injection',
    'NoOP': 'No Outpainting'
}
// Variables for the second set of controls
var currentData2 = 'data1-ablation';
var currentMethod2 = 'base';

var slider2 = document.getElementById('dataSlider2');
var sliderValueDisplay2 = document.getElementById('sliderValue2');

slider2.oninput = function() {
    currentData2 = 'data' + this.value + '-ablation';
    sliderValueDisplay2.textContent = this.value;
    updateVideos2();
}

function updateVideos2(method = null) {
    if (method) {
        currentMethod2 = method;
        var fullName2 = methodNames2[method];// || method;
        document.getElementById('currentMethodDisplay2').textContent = fullName2;
    }

    if (currentMethod2 == "base") {
        document.getElementById('methodVideo2').src = './results1/ab/v1_depth_smooth.mp4';
        document.getElementById('gtVideo2').src = './results1/ab/v1_depth_no_smooth.mp4';
    }
    if (currentMethod2 == "NoFm1") {
        document.getElementById('methodVideo2').src = './results1/ab/v1_consistency.mp4';
        document.getElementById('gtVideo2').src = './results1/ab/v1_consistency_no_fm.mp4';
    }
    if (currentMethod2 == "NoFm2") {
        document.getElementById('methodVideo2').src = './results1/ab/v1_man_book.mp4';
        document.getElementById('gtVideo2').src = './results1/ab/v1_man_book_no_fm.mp4';
    }
    if (currentMethod2 == "NoRI") {
        document.getElementById('methodVideo2').src = './results1/ab/v1_bear.mp4';
        document.getElementById('gtVideo2').src = './results1/ab/v1_bear_no_injection.mp4';
    }
    if (currentMethod2 == "NoOP") {
        document.getElementById('methodVideo2').src = './results1/ab/v1_coconut.mp4';
        document.getElementById('gtVideo2').src = './results1/ab/v1_coconut_no_outpainting.mp4';
    }
}

// Initialize the second set of videos
updateVideos2('base');


function updateVideos1(method = null) {
    var methodNames_1 = {
        'base': 'DynIBaR',
        'propainter': 'ProPainter',
        'robdynerf': 'RoDynRF',
        'e2fgvi': 'E2FGVI',
        'adampi': 'AdaMPI',
        'svm': 'SVM'
    }
    if (method) {
        currentMethod = method;
        var fullName = methodNames_1[method];// || method;
        document.getElementById('currentMethodDisplay').textContent = fullName;
    }

    if (currentMethod == "propainter") {
        document.getElementById('methodVideo').src = './results1/comparisons/v1_propainter_corgi.mp4';
        document.getElementById('oursVideo').src = './results1/comparisons/v1_ours_corgi.mp4';
    }

    if (currentMethod == "base") {
        document.getElementById('methodVideo').src = './results1/comparisons/v1_dynibar_corgi.mp4';
        document.getElementById('oursVideo').src = './results1/comparisons/v1_ours_corgi.mp4';
    }

    if (currentMethod == "robdynerf") {
        document.getElementById('methodVideo').src = './results1/comparisons/v1_robdynerf_corgi.mp4';
        document.getElementById('oursVideo').src = './results1/comparisons/v1_ours_corgi.mp4';
    }
    if (currentMethod == "e2fgvi") {
        document.getElementById('methodVideo').src = './results1/comparisons/v1_e2fgvi_corgi.mp4';
        document.getElementById('oursVideo').src = './results1/comparisons/v1_ours_corgi.mp4';
    }
    if (currentMethod == "adampi") {
        document.getElementById('methodVideo').src = './results1/comparisons/v1_adampi_corgi.mp4';
        document.getElementById('oursVideo').src = './results1/comparisons/v1_ours_corgi.mp4';
    }
    if (currentMethod == "svm") {
        document.getElementById('methodVideo').src = './results1/comparisons/v1_svm_corgi.mp4';
        document.getElementById('oursVideo').src = './results1/comparisons/v1_ours_corgi.mp4';
    }
}

// Initialize the second set of videos
updateVideos1('base');


function updateVideos_r2(method = null) {
    var methodNames_1 = {
        'base': 'E2FGVI',
        'propainter': 'ProPainter',
        'robdynerf': 'RoDynRF',
        'e2fgvi': 'E2FGVI',
        'adampi': 'AdaMPI',
        'svm': 'SVM'
    }
    if (method) {
        currentMethod = method;
        var fullName = methodNames_1[method];// || method;
        document.getElementById('currentMethodDisplay_r2').textContent = fullName;
    }

    if (currentMethod == "propainter") {
        document.getElementById('methodVideo_r2').src = './results1/comparisons/v1_propainter_knight.mp4';
        document.getElementById('oursVideo_r2').src = './results1/comparisons/v1_ours_knight.mp4';
    }

    if (currentMethod == "base") {
        document.getElementById('methodVideo_r2').src = './results1/comparisons/v1_e2fgvi_knight.mp4';
        document.getElementById('oursVideo_r2').src = './results1/comparisons/v1_ours_knight.mp4';
    }

    if (currentMethod == "robdynerf") {
        document.getElementById('methodVideo_r2').src = './results1/comparisons/v1_robdynerf_knight.mp4';
        document.getElementById('oursVideo_r2').src = './results1/comparisons/v1_ours_knight.mp4';
    }

    if (currentMethod == "adampi") {
        document.getElementById('methodVideo_r2').src = './results1/comparisons/v1_adampi_knight.mp4';
        document.getElementById('oursVideo_r2').src = './results1/comparisons/v1_ours_knight.mp4';
    }

    if (currentMethod == "svm") {
        document.getElementById('methodVideo_r2').src = './results1/comparisons/v1_svm_knight.mp4';
        document.getElementById('oursVideo_r2').src = './results1/comparisons/v1_ours_knight.mp4';
    }

}

// Initialize the second set of videos
updateVideos_r2('base');



function updateVideos3(method = null) {
    var methodNames_3 = {
        'base': 'FixedCamera',
        'moderate': 'ModerateMotion',
        'fastmotion': 'FastMotion',
        'nonrigid': 'NonRigidMotion',
    }
    if (method) {
        currentMethod = method;
        var fullName = methodNames_3[method];// || method;
        document.getElementById('currentMethodDisplay3').textContent = fullName;
    }

    if (currentMethod == "base") {
        document.getElementById('methodVideo3').src = './results1/comparisons/Trump_free4d.mp4';
        document.getElementById('oursVideo3').src = './results1/comparisons/Trump_our.mp4';
    }

    if (currentMethod == "moderate") {
        document.getElementById('methodVideo3').src = './results1/comparisons/astronaut_free4d.mp4';
        document.getElementById('oursVideo3').src = './results1/comparisons/astronaut_our.mp4';
    }

    if (currentMethod == "nonrigid") {
        document.getElementById('methodVideo3').src = './results1/comparisons/beach_free4d.mp4';
        document.getElementById('oursVideo3').src = './results1/comparisons/beach_our.mp4';
    }

    if (currentMethod == "fastmotion") {
        document.getElementById('methodVideo3').src = './results1/comparisons/knight_free4d.mp4';
        document.getElementById('oursVideo3').src = './results1/comparisons/knight_our.mp4';
    }

}

// Initialize the third set of videos
updateVideos3('base');
