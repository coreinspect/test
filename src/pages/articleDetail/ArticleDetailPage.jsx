import React from "react";
import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import { Link } from "react-router-dom";
import SuggestedPost from "./container/SuggestedPost";
import SidebarLeft from "../../components/SidebarLeft";
import SidebarRight from "../../components/SidebarRight";

import "./articledetail.css";

const breadCrumbsData = [
   {
      name: "Home",
      link: "/",
   },
   {
      name: "Article",
      link: "/",
   },
   {
      name: "Article Detail",
      link: "/blog/i",
   },
];

const postData = [
   {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      createdAt: "2022-01-01",
   },
   {
      id: 2,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      createdAt: "2022-01-01",
   },
   {
      id: 3,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      createdAt: "2022-01-01",
   },
];

const tagsData = ["Programming", "Development", "Testing"];

const ArticleDetailPage = () => {
   return (
      <MainLayout>
         <div className="article">
            <div className="article-sidebar-left">
               <SidebarLeft />
            </div>
            <section className="article-detail-page">
               <article className="article-detail">
                  <BreadCrumbs data={breadCrumbsData} />
                  {/* Generating the BreadCrumbs from the data */}

                  <Link to="/blog?category=SelectedCategory">Category</Link>
               </article>
               <SuggestedPost
                  header="Latest Article"
                  post={postData}
                  tags={tagsData}
               />
            </section>
            <div className="article-sidebar-right">
               <SidebarRight />
            </div>
         </div>
      </MainLayout>
   );
};

export default ArticleDetailPage;
