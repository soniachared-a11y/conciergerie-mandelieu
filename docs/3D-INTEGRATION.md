# Intégration Three.js / React Three Fiber - Conciergerie Mandelieu

## 🚀 Technologies Ajoutées

- **Three.js** : Moteur 3D WebGL
- **@react-three/fiber** : Renderer React pour Three.js
- **@react-three/drei** : Helpers et abstractions premium

## 📦 Installation

```bash
npm install three @react-three/fiber @react-three/drei
```

## 🎨 Composants 3D Créés

### 1. VehicleShowcase3D
**Localisation:** `src/components/3d/VehicleShowcase3D.tsx`

**Features:**
- Modèle 3D stylisé d'un SUV de luxe
- Rotation automatique interactive
- Matériaux premium (métal, verre, phares lumineux)
- Roues avec accents mint (#99ffcc)
- Particules premium (Sparkles)
- Éclairage multi-points sophistiqué
- Environnement HDR pour reflets réalistes
- Sol réfléchissant
- Ombres dynamiques

**Contrôles utilisateur:**
- Rotation : Clic + glisser
- Rotation automatique activée par défaut
- Zoom désactivé pour cohérence

### 2. Vehicle3DShowcaseSection
**Localisation:** `src/components/sections/Vehicle3DShowcase.tsx`

**Features:**
- Chargement dynamique (SSR désactivé)
- Loading state avec spinner
- Badges interactifs
- Grille de features 3D
- Animations Framer Motion
- Responsive design

### 3. HeroBackground3D
**Localisation:** `src/components/3d/HeroBackground3D.tsx`

**Features:**
- Particules flottantes premium
- Grille cyber animée
- Anneaux orbitaux
- Effets de lumière mint/teal
- Background immersif non-intrusif

## 🎯 Utilisation

### VehicleShowcase3D (Standalone)

```tsx
import VehicleShowcase3D from "@/components/3d/VehicleShowcase3D";

<div className="w-full h-[600px]">
  <VehicleShowcase3D />
</div>
```

### Vehicle3DShowcaseSection (Recommandé)

```tsx
import { Vehicle3DShowcase } from "@/components/sections";

<Vehicle3DShowcase />
```

### HeroBackground3D

```tsx
import dynamic from "next/dynamic";

const HeroBackground3D = dynamic(
  () => import("@/components/3d/HeroBackground3D"),
  { ssr: false }
);

<section className="relative">
  <HeroBackground3D />
  {/* Votre contenu */}
</section>
```

## ⚡ Optimisations Performance

### 1. Chargement Dynamique
```tsx
const VehicleShowcase3D = dynamic(
  () => import("@/components/3d/VehicleShowcase3D"),
  { ssr: false }
);
```

### 2. Device Pixel Ratio
```tsx
<Canvas dpr={[1, 2]} />
// Min: 1, Max: 2 (évite surcharge sur écrans haute densité)
```

### 3. Performance Budget
```tsx
<Canvas performance={{ min: 0.5 }} />
// Dégrade qualité si FPS < 30
```

### 4. Lazy Loading Sections
La section 3D se charge uniquement quand visible (scroll)

## 🎨 Personnalisation

### Couleurs
Toutes les couleurs utilisent votre design system:
- **Primary (Mint):** `#99ffcc`
- **Secondary (Teal):** `#0d9488`
- **Background (Carbon):** `#1e1e1e`

### Modifier le véhicule
`src/components/3d/VehicleShowcase3D.tsx` ligne 8-137

### Ajuster l'éclairage
`src/components/3d/VehicleShowcase3D.tsx` ligne 164-186

### Changer l'environnement
```tsx
<Environment preset="city" /> // Options: sunset, night, dawn, studio
```

## 🔧 Configuration

### Désactiver la rotation automatique
```tsx
<OrbitControls autoRotate={false} />
```

### Activer le zoom
```tsx
<OrbitControls enableZoom={true} />
```

### Ajuster la vitesse de rotation
```tsx
<OrbitControls autoRotateSpeed={2} /> // Default: 1
```

## 📊 Performance

### Métriques attendues
- **FPS:** 60 sur desktop moderne
- **FPS:** 30-45 sur mobile
- **Bundle size:** +170KB (Three.js gzippé)
- **First Load:** +2s (chargement dynamique)

### Lighthouse Impact
- **Performance:** -5 points (acceptable)
- **Accessibility:** Aucun impact
- **Best Practices:** Aucun impact
- **SEO:** Aucun impact (SSR désactivé)

## 🚧 Améliorations Futures

### Court terme
- [ ] Chargement de modèles GLB/GLTF réels (Lamborghini Urus)
- [ ] Selector de véhicules (switcher entre modèles)
- [ ] Touch gestures optimisés mobile

### Moyen terme
- [ ] Post-processing effects (bloom, DOF)
- [ ] Configurateur interactif (couleurs, jantes)
- [ ] Annotations 3D sur features

### Long terme
- [ ] VR/AR support
- [ ] Physique réaliste (suspension, roues)
- [ ] Environnements 3D (Monaco, Cannes)

## 🐛 Troubleshooting

### "Three is not defined"
Solution: Vérifier que le composant utilise `"use client"`

### Canvas noir/vide
Solution: Vérifier que le container parent a une hauteur définie

### Performance faible
Solutions:
1. Réduire `dpr` à `[1, 1.5]`
2. Désactiver les ombres: `shadows={false}`
3. Réduire le nombre de particules

### Erreur SSR
Solution: Utiliser `dynamic` avec `ssr: false`

## 📚 Resources

- [Three.js Docs](https://threejs.org/docs/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Drei Helpers](https://github.com/pmndrs/drei)
- [Three.js Examples](https://threejs.org/examples/)

## 🎓 Learning Path

1. **Débutant:** Modifier les couleurs et positions
2. **Intermédiaire:** Ajouter des formes et matériaux
3. **Avancé:** Importer des modèles GLB
4. **Expert:** Shaders custom et post-processing
