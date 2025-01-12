import React from "react";
import Header from "@/components/layout/Header"
import { Card } from "@/components/ui/card";

export default function Home() {
 return (
    <div>
        <Header />
        <main className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Welcom to our app</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card 
                    title="Getting started"
                    content="This is a simple card component showing how use props"
                />
                <Card 
                    title="Leader more"
                    content="Expore more features to our app"
                />
                
            </div>
        </main>
    </div>
 );
}
