## 1. Git 폴더 연동 / 클론

1. clone 해오기

```bash
git clone https://github.com/Plu457/wecode
```

2. 만든 폴더에서 원격 저장소 추가

```bash
git remote add origin [git 주소]
```

3. 연결 주소 바꾸기

```bash
git remote -v
  -> 현재 연결된 주소 확인
git remote set-url https://github.com/Plu457/wecode
  -> set-url로 새로운 url 셋팅
```

## 2. 변경된 코드 저장, 저장소에 넣기

```bash
git add .
```

```bash
git commit -m "커밋 내용"
```

## 3. 폴더 만들기

```bash
mkdir '폴더 이름'
```
