import React from "react";
import WebCard from "./WebCard";
import './WebList.css';

function WebList() {
    return (
        <div className="grid grid-cols-3 gap-2 gap-y-20 w-full p-16">
            <WebCard 
            imgUrl="https://images-platform.99static.com//ZUU0DJkgfiPJzVKTgSEaii6H9G8=/5x0:1705x1700/fit-in/590x590/99designs-contests-attachments/111/111213/attachment_111213383"
            para="You will get a Woocommerce Wordpress Website | eCommerce website | eCommerce Development"
            day={5}
            amount={100}
            title="E-Commerce"
            />

            <WebCard 
            imgUrl="https://images.refero.design/screenshots/shopify.com/desktop/990af93b-40e1-440b-80fe-ec77499c5b97_thumb.jpg"
            para="You will get Shopify Store Designer, Shopify Expert, Shopify Developer, Shopify Website"
            day={3}
            amount={150}
            title="Shopify"
            />

            <WebCard 
            imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT33kg01hgCEm6nvoxJnaNPq-SxZOx3kVfJag&s"
            para="You will get Blogging Store Designer, Blogging Expert, Blogging Developer, Blogging Website"
            day={3}
            amount={75}
            title="Blogging"
            />

            <WebCard 
            imgUrl="https://www.sliderrevolution.com/wp-content/uploads/2021/12/iAdvice.jpg"
            para="You will get a Business Wordpress Website | Business website | Business Website Development"
            day={7}
            amount={200}
            title="Bussiness"
            />

            <WebCard 
            imgUrl="https://themefisher.com/blog/edubin.webp"
            para="You will get a Educational Wordpress Website | Educational website | Education Website Development"
            day={3}
            amount={100}
            title="Educational"
            />

            <WebCard 
            imgUrl="https://cdn.hostadvice.com/2023/10/final-non-profit-website-examples-7.png"
            para="You will get a Non-Profit Wordpress Website | Non-Profit website | Non-Profit Website Development"
            day={5}
            amount={0}
            title="Non-Profit"
            />

            <WebCard 
            imgUrl="https://raw.githubusercontent.com/Kentico/community-portal/main/images/portal-home.png"
            para="You will get a Community Portal | Community Expert | Community Developer | Non-Profit Website Development"
            day={5}
            amount={150}
            title="Community-Portal"
            />

            <WebCard 
            imgUrl="https://designoncustom.in/wp-content/uploads/2024/06/3d-logo-design-services-1024x686.jpg"
            para="You will get Expert-Crafted Logo Design with Unlimited Revisions"
            day={2}
            amount={25}
            title="Logo-Design-1"
            />

            <WebCard 
            imgUrl="https://www.stellendesign.com/wp-content/uploads/2020/01/2019_Logos-03.jpg"
            para="You will get Modern Logo Design, Modern Logo with Multiple Concepts"
            day={1}
            amount={25}
            title="Logo-Design-2"
            />
        </div>
    );
}


export default WebList;