import articleStyles from "../styles/Article.module.css";
import Articleitem from './Articleitem'

 const ArticleList = ({articles}) => {
    return (
        <div className={articleStyles.grid}>
            {articles.map((article) =>(
                <Articleitem article={article} />
            ))} 
            
        </div>
    )
}
export default ArticleList;