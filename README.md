#File Organizer

NodeJS script to organize files in the specified folder by moving it into sub-folders with the extension name.

```
// Clone Repository and cd file-organizer
node index.js <path of the folder to be organized>
```

File in path(Before organizing):
Awesome.jpg
Barcelona.mp4
Idea.psd
AnotherImage.png
One-more.jpg

File in path(After Organizing):
jpg
↪ Awesome.jpg
↪ One-more.jpg
mp4
↪ Barcelona.png
png
↪ AnotherImage.png
psd
↪ Idea.psd
