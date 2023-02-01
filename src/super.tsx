export{}

export function getImageUrl(imageId: string, size = 's') {
    return (
      'https://www.quever.news/u/fotografias/m/2020/11/3/f638x638-2634_60801_5623.jpg' +
      imageId +
      size +
      '.jpg'
    );
  }