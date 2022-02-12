const posts = [
  {
    title: "Javascript",
    descriptions: "Esnek Bir dildir",
    author: "Yazar1",
  },
  {
    title: "Python",
    descriptions: "Öğrenmesi Kolaydır",
    author: "Yazar2",
  },
];

const listPosts = () => {
  posts.map((post) => console.log(`${post.title} => ${post.descriptions}`));
};

const addPosts = (newPost) => {
  const promiseAddPost = new Promise((resolve, reject) => {
    posts.push(newPost);
    resolve(posts);
    //reject('Bir Hata Oluştu');
  });
  return promiseAddPost;
};

async function showPosts() {
  try {
    await addPosts({
      title: "java",
      descriptions: "Çok geniş kullanım Alanı",
      author: "Yazar3",
    });
    listPosts();
  } catch (error) {
    console.log(error);
  }
}
showPosts();
