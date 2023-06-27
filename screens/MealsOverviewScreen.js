import { StyleSheet, FlatList, View, Pressable } from "react-native";
import React, { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealsList/MealItem";
import MealList from "../components/MealsList/MealList";

export default function MealsOverviewScreen({ route, navigation }) {
  const catID = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealitem) => {
    return mealitem.categoryIds.indexOf(catID) >= 0;
  });

  useLayoutEffect(() => {
    const categorTitle = CATEGORIES.find(
      (category) => category.id === catID
    ).title;
    navigation.setOptions({ title: categorTitle });
  }, [navigator, catID]);

  return <MealList items={displayedMeals} />;
}
