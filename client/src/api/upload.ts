export const postCreatePage = async ({ title, file }: { title: string; file: File }) => {
  const formData = new FormData();
  formData.append("name", title);
  formData.append("file", file);

  const data = await fetch("http://localhost:8000/page/create", {
    method: "POST",
    body: formData,
  });
  const res = await data.json();
  return res;
};
