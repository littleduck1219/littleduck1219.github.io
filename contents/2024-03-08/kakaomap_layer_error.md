---
date: '2024-03-08'
title: 'kakao map 지도 겹침현상'
categories: ['Web', 'React', 'error']
summary: 'Next Auth를 통해 로그인이 필요한 페이지는 어떻게 구현하는지 궁금했는데 그것에 대해서 알아보았습니다.'
thumbnail: './kakaomap_layer_error_2.png'
---

![1](https://i.ibb.co/3yXS4K3/kakaomap-layer-error-1.png)

현제 카카오 맵 api를 이용해서 지도를 불러오고 open api를 이용해서 차량 정비소들을 표시하고 있습니다.
해결하지 못했던 문제점으로 맵을 이동하거나 확대할시에 마치 움직이기 이전의 지도가 겹쳐보이면서 지도의 변경이 이뤄지는 모습이 보였고 많이 움직였을시에 이렇게 완전히 겹치게 되는 현상이 발생되었습니다.

**지도 생성 코드**

- 변경 전

```tsx
useEffect(() => {
  if (geolocation?.lat) {
    const options = {
      center: new kakaoMaps.LatLng(geolocation.lat, geolocation.long),
      level: 5,
    };
    const map = new kakaoMaps.Map(mapRef.current, options);
    setMaps(map);

    kakaoMaps.event.addListener(map, 'dragend', () => {
      const latlng = map.getCenter();
      dispatch(
        RTK.setGeoLocation({
          lat: latlng.Ma,
          long: latlng.La,
        }),
      );
    });
  }
}, [geolocation, mapRef, kakaoMaps, dispatch]);
```

- 변경 후

```tsx
useEffect(() => {
  if (!getMaps && geolocation?.lat) {
    const options = {
      center: new kakaoMaps.LatLng(geolocation.lat, geolocation.long),
      level: 5,
    };
    const map = new kakaoMaps.Map(mapRef.current, options);
    setMaps(map);

    const dragendListener = kakaoMaps.event.addListener(map, 'dragend', () => {
      const latlng = map.getCenter();
      dispatch(
        RTK.setGeoLocation({
          lat: latlng.getLat(),
          long: latlng.getLng(),
        }),
      );
    });

    return () => {
      if (dragendListener) {
        kakaoMaps.event.removeListener(dragendListener);
      }
    };
  }
}, [geolocation]);

// Update center when geolocation changes
useEffect(() => {
  if (getMaps && geolocation?.lat) {
    const newCenter = new kakaoMaps.LatLng(geolocation.lat, geolocation.long);
    getMaps.setCenter(newCenter);
  }
}, [geolocation, getMaps]);
```

이전 코드에서는 드래그 할때마다 지도가 다시 생성되는 이슈가 존재했었다면

새로 고친 코드에서는 지도가 아직 생성 되지 않았을 때만 지도가 생성되고 그 이후로는 지도를 생성하지 않습니다
geolocation이 변경될 때마다 지도 중심을 업데이트 해서 지도의 중심만 업데이트 합니다.

![2](https://i.ibb.co/gtwY4R4/kakaomap-layer-error-2.png)
