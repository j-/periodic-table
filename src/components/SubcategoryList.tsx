import * as React from 'react';
import SubcategoryItem from '../containers/SubcategoryItem';

const SubcategoryList: React.StatelessComponent = () => (
	<div className="SubcategoryList">
		<div className="SubcategoryList-item">
			<SubcategoryItem subcategory="alkali-metal">Alkali metal</SubcategoryItem>
		</div>
		<div className="SubcategoryList-item">
			<SubcategoryItem subcategory="alkaline-earth-metal">Alkaline earth metal</SubcategoryItem>
		</div>
		<div className="SubcategoryList-item">
			<SubcategoryItem subcategory="lanthanide">Lanthanide</SubcategoryItem>
		</div>
		<div className="SubcategoryList-item">
			<SubcategoryItem subcategory="actinide">Actinide</SubcategoryItem>
		</div>
		<div className="SubcategoryList-item">
			<SubcategoryItem subcategory="transition-metal">Transition metal</SubcategoryItem>
		</div>
		<div className="SubcategoryList-item">
			<SubcategoryItem subcategory="post-transition-metal">Post-transition metal</SubcategoryItem>
		</div>
		<div className="SubcategoryList-item">
			<SubcategoryItem subcategory="metalloid">Metalloid</SubcategoryItem>
		</div>
		<div className="SubcategoryList-item">
			<SubcategoryItem subcategory="polyatomic-nonmetal">Polyatomic nonmetal</SubcategoryItem>
		</div>
		<div className="SubcategoryList-item">
			<SubcategoryItem subcategory="diatomic-nonmetal">Diatomic nonmetal</SubcategoryItem>
		</div>
		<div className="SubcategoryList-item">
			<SubcategoryItem subcategory="noble-gas">Noble gas</SubcategoryItem>
		</div>
		<div className="SubcategoryList-item">
			<SubcategoryItem subcategory={null}>Unknown chemical properties</SubcategoryItem>
		</div>
	</div>
);

export default SubcategoryList;
