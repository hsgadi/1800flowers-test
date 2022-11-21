import { EditOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";

const Articles = ({ articles, onArticleUpdate }) => (
  <ul>
    {articles.map((article) => (
      <li key={article.id}>
        <Article article={article} onArticleUpdate={onArticleUpdate} />
      </li>
    ))}
  </ul>
);

const Article = ({ article, onArticleUpdate }) => {
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState(false);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = () => {
    article.title = title;
    onArticleUpdate(article);
    setOpenModal(false);
  };

  return (
    <>
      <Modal
        title="Edit"
        open={openModal}
        onCancel={() => setOpenModal(false)}
        onOk={handleSubmit}
      >
        <TextArea value={title} onChange={handleChange} />
      </Modal>
      <div className="d-flex">
        <li>{article.title}</li>
        <Button
          icon={<EditOutlined />}
          shape="circle "
          onClick={() => {
            setOpenModal(true);
            setTitle(article.title);
          }}
        ></Button>
      </div>
    </>
  );
};

export default Articles;
