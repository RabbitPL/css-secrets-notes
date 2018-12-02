// 定义数据
let imageDatas = [{
    'fileName': 'person1.jpeg',
    'title': 'Enjoy my life',
    'desc': 'Love, sunshine, sports'
}, {
    'fileName': 'person2.jpeg',
    'title': 'Enjoy my life',
    'desc': 'Love, sunshine, sports'
}, {
    'fileName': 'person3.jpeg',
    'title': 'Enjoy my life',
    'desc': 'Love, sunshine, sports'
}, {
    'fileName': 'person4.jpeg',
    'title': 'Enjoy my life',
    'desc': 'Love, sunshine, sports'
}, {
    'fileName': 'person5.jpeg',
    'title': 'Enjoy my life',
    'desc': 'Love, sunshine, sports'
}, {
    'fileName': 'person6.jpeg',
    'title': 'Enjoy my life',
    'desc': 'Love, sunshine, sports'
}, {
    'fileName': 'person7.jpeg',
    'title': 'Enjoy my life',
    'desc': 'Love, sunshine, sports'
}, {
    'fileName': 'person8.jpeg',
    'title': 'Enjoy my life',
    'desc': 'Love, sunshine, sports'
}, {
    'fileName': 'person9.jpeg',
    'title': 'Enjoy my life',
    'desc': 'Love, sunshine, sports'
}];

// 图片文件名转换为真实有效地址
imageDatas = (function genImageURL(imageDatasArr) {
    for (var i = 0; i < imageDatasArr.length; i++) {
        var singleImageData = imageDatasArr[i];
        singleImageData.imageURL = 'images/' + singleImageData.fileName;
        imageDatasArr[i] = singleImageData;
    }
    return imageDatasArr;
})(imageDatas);

var imgFigures = [];
var controllerUnits = [];

var imgDom = document.querySelector('.img-sec');
var imgListHtml = '';
imageDatas.forEach(function(image) {
    console.log(image);
    let htmlStr = `<figure class="img-figure">
        <img width="260" height="260" src=${image.imageURL} alt=${image.title} />
        <figcaption>
            <h2 class="img-title">${image.title}</h2>
        </figcaption>
    </figure>`;
    imgListHtml += htmlStr;
});
imgDom.innerHTML = imgListHtml;

// 分为5个区域：中心，左、右、上、下
// 区域范围要通过场景和图片计算